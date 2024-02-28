import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../styles/mainPageStyle';
import MainPageLanding from './MainPageLending';
import { useNavigate } from 'react-router-dom';

const MainPageList = () => {
  const lists = useSelector((state) => state.list.lists);
  const navigate = useNavigate();

  const onClick = (place) => {
    const confirm = window.confirm(`${place} 후기 페이지로 이동 하시겠습니까?`);
    if (confirm) {
      navigate(`/reviewpage/${place}`);
    }
    return;
  };
  return (
    <S.SerchSection>
      <MainPageLanding />
      <S.ListContent>
        {lists.map((item, idx) => {
          return (
            <li key={idx} onClick={() => onClick(item.place_name)}>
              <p>{idx + 1}</p>
              <p>{item.place_name}</p>
              <p>후기 보러가기</p>
            </li>
          );
        })}
      </S.ListContent>
    </S.SerchSection>
  );
};

export default MainPageList;
