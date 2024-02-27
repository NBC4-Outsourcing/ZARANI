import { ContentsList } from 'components/styles/ReviewStyle';
import React, { useRef, useState } from 'react';
import useInput from '../../hooks/useInput';
import { supabase } from 'api/supabase/supabase';

export const ReviewUpdateForm = ({ item }) => {
  const imgRef = useRef(null);
  const [editData, setEditData] = useState([item]);
  const [editImg, setEditImg] = useState('');
  const [updateInput, setUpdateInput] = useState('');

  const onUpdateContentHandler = (e) => {
    setUpdateInput(e.target.value);
    console.log('updateInput', updateInput);
  };

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

  // 데이터 수정
  console.log('editData', editData);
  const modifyReview = async (id, reviewimg) => {
    // 이미지 수정
    const storagePath = '';
    try {
      const imgPath = imgRef.current.files[0];
      const imgUpdate = await supabase.storage.from('reviewImage').upload(reviewimg, imgPath, {
        upsert: true
      });
      storagePath = imgUpdate.path;
      console.log('reviewimg', reviewimg);
      console.log('이미지 수정 완료', imgUpdate);
    } catch (error) {
      console.log('이미지 수정 실패', error);
    }

    // 데이터 수정
    const modifyReviewData = {
      ...editData[0],
      content: updateInput,
      reviewimg: storagePath
    };
    console.log('modifyReviewData', modifyReviewData);
    const { data, error } = await supabase.from('reviewWrite').update(modifyReviewData).eq('id', id).select();
    if (!error) {
      console.log('게시물 수정 완료', data);
    } else {
      console.log('게시물 수정 실패', error);
    }
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
            <textarea value={updateInput} onChange={onUpdateContentHandler} defaultValue={item.content}></textarea>
            <button
              onClick={() => {
                modifyReview(item.id, item.reviewimg);
              }}
            >
              수정완료
            </button>
          </div>
        );
      })}
    </div>
  );
};

// 수정 전용 컴포넌트 생성
// 삼항연산자부분에 수정 컴포넌트를 연결 아이템을 프롭으로 전달

// 수정 컴포넌트에서

// 프롭으로 받은 데이터를 스테이트를 만들어서 저장 (이전데이터값)

// 데이터를 수정하고 수정 완료버튼클릭

// 등록일은 수정이 안되니까...
// 수정데이터 저장된 스테이트
// new{

// }

// 수정 완료를 누르면 이전 데이터 값을 저장한 스테이트에 셋을 이용해서 데이터를 다시 저장
// 변화가 없는 데이터는 이전 값을 가져와서 사용하고 content
