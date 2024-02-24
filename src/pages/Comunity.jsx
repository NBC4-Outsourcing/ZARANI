import ComunityMain from 'components/comunityComponents/ComunityMain';
import ComunityInputForm from 'components/comunityComponents/ComunityInputForm';
import Header from 'components/layout/Header';
import React from 'react';
import { ComunityDiv } from 'components/styles/ComunityStyle';

const Comunity = () => {
  return (
    <ComunityDiv>
      <Header />
      <ComunityInputForm />
      <ComunityMain />
    </ComunityDiv>
  );
};

export default Comunity;
