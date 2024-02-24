import MainPage from 'components/mainPage/MainPage';
import Comunity from 'pages/Comunity';
import MyPage from 'pages/MyPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comunity" element={<Comunity />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
