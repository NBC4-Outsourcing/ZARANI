import styled from 'styled-components';

export const LoginPageDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const WidthFiftyPercentDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const WidthHundredPercentImg = styled.img`
  width: 100%;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkToSignUpWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  & span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

export const StyledLoginInput = styled.input`
  width: 300px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border: 1px solid grey;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const StyledLoginButton = styled.button`
  width: 300px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--subColor1);
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export const LinkToSpan = styled.span`
  font-weight: bolder;
  color: var(--subColor1);
  cursor: pointer;

  &:hover {
    color: var(--mainColor);
  }
`;
