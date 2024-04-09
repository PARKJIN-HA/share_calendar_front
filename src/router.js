import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import auth from '@utils/auth'; // auth 모듈 불러오기
import App from '@/app';
import Login from '@pages/login';
import Main from '@pages/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "main",
        element: <Main/>,
        loader: async () => {
          if (!auth.isLoggedIn()) {
            // 사용자가 로그인하지 않은 경우, 로그인 페이지로 리다이렉션
            return redirect('/login');
          }
          // 로그인한 사용자의 경우, 추가적인 데이터 로딩 등의 처리를 할 수 있습니다.
        },
      },
    ],
  },
]);

export default router;
