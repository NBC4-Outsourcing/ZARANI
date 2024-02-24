import Layout from 'components/layoutComponent/Layout';
import MainPage from 'components/mainPage/MainPage';
import ReviewForm from 'components/reviewComponents/ReviewForm';
import Comunity from 'pages/Comunity';
import MyPage from 'pages/MyPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/comunity" element={<Comunity />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/reviewpage" element={<ReviewForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
