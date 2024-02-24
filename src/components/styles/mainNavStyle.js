import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  margin-top: 20px;
  height: 250px;
`;
export const ListSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
export const ImgList = styled.img`
  width: 30%;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;
