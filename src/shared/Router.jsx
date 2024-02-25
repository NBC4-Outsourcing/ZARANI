import Layout from 'components/layoutComponent/Layout';
import MainPage from 'components/mainPageComponent/MainPage';
import Comunity from 'pages/Comunity';
import Login from 'pages/Login';
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
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
