import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '@sidebar/sidemenu'; // 사이드바 컴포넌트
import NotificationIcon from '@component/notificationIcon'; // 알림 아이콘 컴포넌트
import NotificationModal from '@component/notificationModal'; // 알림 모달 컴포넌트
import styled, { createGlobalStyle } from 'styled-components';

// 전역 스타일을 정의하여 모든 여백을 제거합니다.
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* 추가적인 전역 스타일 */
  }
`;

// 해더 스타일
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between; // 양 끝 정렬
  height: 60px;
  background-color: #4e5d6c;
  color: white;
  font-size: 24px;
  padding: 0 1rem; // 패딩 추가, 기존 20px에서 1rem으로 변경하여 상황에 따라 조정
  position: relative; // 알림 아이콘의 절대 위치 기준점
`;

// 메인 콘텐츠 영역 스타일
const MainContent = styled.div`
  flex-grow: 1;
  background-color: #f5f5f5;
  overflow: auto;
`;

// 레이아웃 스타일
const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

// 헤더 컴포넌트
const HeaderComponent = ({ pageTitle }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();

  // 모달 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  // 모달 토글 함수
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <Header>
      <div>{pageTitle}</div>
      <div>
        <NotificationIcon onClick={toggleModal} />
        {isModalOpen && <NotificationModal ref={modalRef} />}
      </div>
    </Header>
  );
};

// App 컴포넌트
const App = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('Home');

  // URL 변경 감지 및 페이지 타이틀 업데이트
  useEffect(() => {
    setPageTitle(getPageTitle(location.pathname));
  }, [location]);

  // 페이지 타이틀 결정 함수
  const getPageTitle = (pathname) => {
    const page = pathname.split('/').pop();
    return page.charAt(0).toUpperCase() + page.slice(1);
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <div style={{ width: '100%' }}>
          <HeaderComponent pageTitle={pageTitle} />
          <MainContent>
            <Outlet />
          </MainContent>
        </div>
      </Layout>
    </>
  );
};

export default App;
