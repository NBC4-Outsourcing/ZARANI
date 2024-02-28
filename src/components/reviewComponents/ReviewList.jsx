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
import useSetMutation from 'hooks/useSetMutations';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { ReviewUpdateForm } from './ReviewUpdateForm';
import { deleteReview, getReviewList } from './reviewPageSupabase';

export const ReviewList = ({ placename, userData }) => {
  const [mutaion] = useSetMutation(deleteReview, 'reviewList');

  // 수정 여부 state
  const [editDataId, setEditDataId] = useState(null);
  const [openItemId, setOpenItemId] = useState(null);
  const { isLoading, data } = useQuery('reviewList', getReviewList);

  // 이미지를 저장하지 않은 경우 기본 이미지(깃헙에서 가져옴)
  const defaultProfileImage =
    'https://github.com/NBC4-Outsourcing/zarani/blob/main/src/assets/defaultProfileImage.png?raw=true';

  if (isLoading) {
    return <div>로딩중입니다</div>;
  }
  // 데이터 삭제
  const removeReview = async (id, reviewimg) => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      mutaion.mutate([id, reviewimg]);
    }
  };

  // 토글 이벤트
  const contentToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <ContentsList>
      {data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        ?.map((item) => {
          return placename.placename === item.marker ? (
            <ListMapWrapper key={item.id}>
              {editDataId === item.id ? (
                <ReviewUpdateForm item={item} setEditDataId={setEditDataId} />
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
                        {userData.email === item.email ? (
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
                        ) : (
                          false
                        )}
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
