import { supabase } from 'api/supabase/supabase';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';

// DB에 후기 등록
export const insertReview = async ([
  placename,
  imgPath,
  imgName,
  reviewContent,
  reset,
  setAddImg,
  email,
  nickname,
  avatar
]) => {
  // storage에 이미지 등록
  let storagePath = '';
  if (imgPath) {
    const { data, error } = await supabase.storage
      .from('reviewImage')
      .upload(`reviewFile/files/${email}${imgName}`, imgPath, {
        cacheControl: '3600',
        upsert: false
      });

    if (!error) {
      storagePath = data.path; // 이미지 등록이 성공하면 이미지 경로 저장("reviewFile/files/kim@naver.com06cea4ae-f3e1-4b2f-a00c-9538c8f763d1")
    } else {
      console.error('이미지 등록 실패!', error);
    }
  }

  const newReviews = {
    marker: placename.placename,
    email,
    nickname,
    avatar,
    content: reviewContent,
    reviewimg: storagePath,
    imageUrl: '' // reviewList component에서 조회 시 url이 들어감
  };

  // 데이터 등록
  const { data, error } = await supabase.from('reviewWrite').insert([newReviews]).select();
  if (data) {
    alert('게시물이 등록 되었습니다.');
    reset();
    setAddImg(null);
    return data;
  } else {
    alert('게시물 등록에 실패했습니다.');
    console.error('error', error);
  }
};

export const getReviewList = async () => {
  const { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
  if (error) {
    console.error(error);
  } else {
    const reviewsWriteData = reviewWrite.map((item) => {
      const imgUrl = supabase.storage.from('reviewImage').getPublicUrl(item.reviewimg);
      if (!imgUrl.error) {
        return { ...item, imageUrl: imgUrl.data.publicUrl };
      } else {
        alert('이미지를 가져오지 못했습니다.');
        console.error('이미지 가져오기 실패', imgUrl.error);
      }
    });
    return reviewsWriteData;
  }
};

export const deleteReview = async ([id, reviewimg]) => {
  console.log('id, reviewimg', id, reviewimg);
  // 이미지 삭제
  const { data, error: imgError } = await supabase.storage.from('reviewImage').remove(reviewimg);
  if (!imgError) {
    console.log('이미지 삭제 성공', data);
  } else {
    console.log('이미지 삭제 실패', imgError);
  }

  // 게시글 삭제
  const { error } = await supabase.from('reviewWrite').delete().eq('id', id);
  if (!error) {
    alert('게시물이 삭제되었습니다.');
    console.log('게시물 삭제 성공');
    return;
  } else {
    console.log('게시물 삭제 실패', error);
  }
};

export const updateStorage = async (img, storagePath, newPath) => {
  const imgUpdate = await supabase.storage.from('reviewImage').upload(newPath, img, {
    cacheControl: '3600',
    upsert: true
  });
  if (imgUpdate.error) {
    console.log('이미지 수정 실패', imgUpdate.error);
  } else {
    console.log('이미지 수정 완료', imgUpdate);
    // storagePath = imgUpdate.data.path;
    return imgUpdate.data.path;
  }
};

export const updateReview = async ([id, modifyReviewData, setEditDataId]) => {
  const { data, error } = await supabase.from('reviewWrite').update(modifyReviewData).eq('id', id).select();
  if (!error) {
    console.log('게시물 수정 완료', data);
    alert('게시물 수정이 완료되었습니다');
    setEditDataId(null);
  } else {
    console.log('게시물 수정 실패', error);
  }
};
