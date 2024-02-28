import { supabase } from 'api/supabase/supabase';
import zarani from 'assets/zarani.png';
import { getFormattedDate } from 'components/communityComponents/formattedDate';
import {
  ContentBtns,
  ContentBtnsWrapper,
  ContentImgWrapper,
  ContentWrapper,
  ContentsList,
  ListContent,
  ListMapWrapper,
  ListNickName,
  ToggleContent
} from 'components/styles/ReviewStyle';
import { useEffect, useState } from 'react';
import { ReviewUpdateForm } from './ReviewUpdateForm';

export const ReviewList = ({ reviewData, setReviewData }) => {
  // const [reviewData, setReviewData] = useState([]);

  // 수정 여부 state
  const [editDataId, setEditDataId] = useState(null);

  // DB에 저장된 데이터 가져오기
  // useEffect(() => {
  //   // 게시글 불러오기
  //   // const fetchData = async () => {
  //   //   let { data: reviewWrite, error } = await supabase.from('reviewWrite').select('*');
  //   //   if (error) {
  //   //     console.log('게시물 조회 실패', error);
  //   //   } else {
  //   //     console.log('게시물 조회 성공', reviewWrite);

  //   //     // 이미지 불러오기
  //   //     const reviewsWriteData = reviewWrite.map((item) => {
  //   //       const imgUrl = supabase.storage.from('reviewImage').getPublicUrl(item.reviewimg);
  //   //       return { ...item, imageUrl: imgUrl.data.publicUrl };
  //   //     });
  //   //     setReviewData(reviewsWriteData);
  //   //   }
  //   // };

  //   fetchData();
  // }, []);

  // 데이터 삭제
  const removeReview = async (id, reviewimg) => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      // 이미지 삭제
      try {
        const { data, error } = await supabase.storage.from('reviewImage').remove(reviewimg);
        if (!error) {
          console.log('이미지 삭제 성공', data);
        }
      } catch (error) {
        console.log('이미지 삭제 실패', error);
      }
      // 게시글 삭제
      try {
        const { error } = await supabase.from('reviewWrite').delete().eq('id', id);
        if (!error) {
          alert('게시물이 삭제되었습니다.');
          console.log('게시물 삭제 성공');
          return;
        }
      } catch (error) {
        console.log('게시물 삭제 실패', error);
      }
    }
  };
  const [openItemId, setOpenItemId] = useState(null);

  const contentToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };
  console.log('reviewData', reviewData);

  return (
    <ContentsList>
      {reviewData?.map((item) => {
        console.log('reviewData', reviewData);

        return (
          <ListMapWrapper key={item.id}>
            {editDataId === item.id ? (
              <ReviewUpdateForm item={item} setEditDataId={setEditDataId} setReviewData={setReviewData} />
            ) : (
              <>
                {openItemId === item.id ? (
                  <ContentWrapper
                    onClick={() => {
                      contentToggle(item.id);
                    }}
                  >
                    <ContentImgWrapper>
                      <ListNickName>{item.nickname}</ListNickName>
                      <img src={item.reviewimg ? item.imageUrl : zarani} alt="리뷰 이미지" />
                      <div>{getFormattedDate(item.date)}</div>
                    </ContentImgWrapper>
                    <ContentBtnsWrapper>
                      <ListContent>{item.content}</ListContent>
                      <ContentBtns>
                        <button
                          onClick={() => {
                            setEditDataId(item.id);
                          }}
                        >
                          수정
                        </button>
                        <button
                          onClick={() => {
                            removeReview(item.id, item.reviewimg);
                          }}
                        >
                          삭제
                        </button>
                      </ContentBtns>
                    </ContentBtnsWrapper>
                  </ContentWrapper>
                ) : (
                  <ToggleContent
                    onClick={() => {
                      contentToggle(item.id);
                    }}
                  >
                    {item.content}
                  </ToggleContent>
                )}
              </>
            )}
          </ListMapWrapper>
        );
      })}
    </ContentsList>
  );
};
