import { supabase } from 'api/supabase/supabase';
import { useRef, useState } from 'react';
import useInput from '../../hooks/useInput';
import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

export const ReviewUpdateForm = ({ item, setEditDataId }) => {
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const imgName = uuid();

  const [editData, setEditData] = useState([item]);
  const [editImg, setEditImg] = useState('');
  const { email } = editData[0];

  const [updateInput, , onUpdateContentHandler, reset] = useInput({ updateContent: '' });
  const { updateContent } = updateInput;

  // 이미지 미리보기
  const editImgHandler = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      setEditImg(imgUrl);
    } else {
      console.log('이미지 파일이 선택되지 않았습니다');
    }
  };

  const modifyReview = async (id, reviewimg, editData) => {
    // 이미지 수정
    let storagePath = '';
    const newPath = email + imgName;
    const img = imgRef.current.files[0];
    console.log('newPath', newPath);

    try {
      const imgUpdate = await supabase.storage.from('reviewImage').upload(newPath, img, {
        cacheControl: '3600',
        upsert: true
      });
      console.log('이미지 수정 완료', imgUpdate);
      storagePath = imgUpdate.data.path;
    } catch (error) {
      console.log('이미지 수정 실패', error);
    }

    // 데이터 수정
    if (!updateContent) {
      alert('내용을 입력해주세요');
      contentRef.current.focus();
      return;
    }
    const modifyReviewData = {
      // ...editData[0],
      ...editData,
      content: updateContent,
      reviewimg: storagePath ? storagePath : reviewimg
    };
    console.log('modifyReviewData', modifyReviewData);
    const { data, error } = await supabase.from('reviewWrite').update(modifyReviewData).eq('id', id).select();
    if (!error) {
      console.log('게시물 수정 완료', data);
      alert('게시물 수정이 완료되었습니다');
      setEditDataId(null);
    } else {
      console.log('게시물 수정 실패', error);
    }
  };

  const updateCancel = () => {
    setEditDataId(null);
  };

  return (
    <div>
      {editData.map((item) => {
        return (
          <div key={item.id}>
            <label>
              {item.imageUrl && <img src={editImg ? editImg : item.imageUrl} alt="이미지" />}
              <p>이미지 수정 시 이미지를 클릭해 주세요</p>
              <input ref={imgRef} onChange={editImgHandler} type="file" accept="image/*" />
            </label>
            <div>{item.nickname}</div>
            <textarea
              value={updateContent} // 여기 초기값... 기존  메세지도 보여주고 새 메세지도 넣어야하는데
              name="updateContent"
              onChange={onUpdateContentHandler}
              maxLength={80}
              placeholder="최대 80자까지만 입력할 수 있습니다."
              ref={contentRef}
            ></textarea>
            <button
              onClick={() => {
                modifyReview(item.id, item.reviewimg);
              }}
            >
              수정완료
            </button>
            <button onClick={updateCancel}>취소</button>
          </div>
        );
      })}
    </div>
  );
};

// 1. 디폴트 밸류를 받아오지못하고있다
// 2. 텍스트 수정이 없으면 유효성검사 통과가 안된다
