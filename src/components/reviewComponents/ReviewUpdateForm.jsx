import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';
import { supabase } from 'api/supabase/supabase';
import zarani from 'assets/zarani.png';
import {
  ContentBtns,
  ContentWrapper,
  ListMapWrapper,
  UpdateBtnsWrapper,
  UpdateImg,
  UpdateImgWrapper,
  UpdateList,
  UpdateText
} from 'components/styles/ReviewStyle';
import useInput from 'hooks/useInput';
import { useRef, useState } from 'react';

export const ReviewUpdateForm = ({ item, setEditDataId, setReviewData }) => {
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const imgName = uuid();
  const [editImg, setEditImg] = useState('');
  const editData = [item];
  const { email } = editData[0];
  const { content } = editData[0];
  const [updateInput, , onUpdateContentHandler] = useInput({ updateContent: content });
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

  const modifyReview = async (id, reviewimg) => {
    // 이미지 수정
    const img = imgRef.current.files[0];
    let storagePath = '';
    const newPath = email + imgName;
    if (img) {
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
    }
    // 데이터 수정
    if (!updateContent) {
      alert('내용을 입력해주세요');
      contentRef.current.focus();
      return;
    }

    const modifyReviewData = {
      ...editData[0],
      content: updateContent,
      reviewimg: storagePath ? storagePath : reviewimg
    };

    const { data, error } = await supabase.from('reviewWrite').update(modifyReviewData).eq('id', id).select();
    if (!error) {
      console.log('게시물 수정 완료', data);
      alert('게시물 수정이 완료되었습니다');
      setEditDataId(null);
      setReviewData((prev) =>
        prev.map((item) => {
          return item.id === modifyReviewData.id ? modifyReviewData : item;
        })
      );
    } else {
      console.log('게시물 수정 실패', error);
    }
  };

  const updateCancel = () => {
    setEditDataId(null);
  };

  return (
    <UpdateList>
      {editData.map((data) => {
        return (
          <ListMapWrapper key={data.id}>
            <ContentWrapper>
              <UpdateImgWrapper>
                <label>
                  {data.imageUrl ? <img src={editImg ? editImg : data.imageUrl} alt="이미지" /> : <img src={zarani} />}
                  <UpdateImg>
                    <p>이미지 변경 시 이미지를 클릭해 주세요</p>
                  </UpdateImg>
                  <input ref={imgRef} onChange={editImgHandler} type="file" accept="image/*" />
                </label>
              </UpdateImgWrapper>

              <UpdateBtnsWrapper>
                <UpdateText
                  value={updateContent}
                  name="updateContent"
                  onChange={onUpdateContentHandler}
                  maxLength={80}
                  placeholder="최대 80자까지만 입력할 수 있습니다."
                  ref={contentRef}
                ></UpdateText>
                <ContentBtns>
                  <button
                    onClick={() => {
                      modifyReview(data.id, data.reviewimg);
                    }}
                  >
                    수정완료
                  </button>
                  <button onClick={updateCancel}>취소</button>
                </ContentBtns>
              </UpdateBtnsWrapper>
            </ContentWrapper>
          </ListMapWrapper>
        );
      })}
    </UpdateList>
  );
};
