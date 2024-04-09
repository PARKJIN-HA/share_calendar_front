import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18에서는 이렇게 import 합니다.
import { RouterProvider } from 'react-router-dom';
import router from '@/router'; // 별칭을 사용하는 라우터 설정 불러오기

// 루트 DOM 요소를 선택합니다.
const container = document.getElementById('root');
// createRoot로 앱의 루트를 생성합니다.
const root = createRoot(container);

// RouterProvider와 앱을 루트에 렌더링합니다.
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
