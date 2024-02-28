import { supabase } from 'api/supabase/supabase';
import defaultProfileImage from 'assets/defaultProfileImage.png';
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
import { useState } from 'react';
import { ReviewUpdateForm } from './ReviewUpdateForm';

export const ReviewList = ({ reviewData, setReviewData, placename, userData }) => {
  // 수정 여부 state
  const [editDataId, setEditDataId] = useState(null);
  const [openItemId, setOpenItemId] = useState(null);

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
          setReviewData((prev) =>
            prev.filter((item) => {
              return item.id !== id;
            })
          );
          return;
        }
      } catch (error) {
        console.log('게시물 삭제 실패', error);
      }
    }
  };

  // 토글 이벤트
  const contentToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <ContentsList>
      {reviewData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        ?.map((item) => {
          return placename.placename === item.marker ? (
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
                        <img src={item.reviewimg ? item.imageUrl : defaultProfileImage} alt="리뷰 이미지" />
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
          ) : (
            false
          );
        })}
    </ContentsList>
  );
};
