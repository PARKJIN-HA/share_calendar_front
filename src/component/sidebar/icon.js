// src/component/Sidebar/MenuIcon.js
import React from 'react';
import styled from 'styled-components';
import icon from '@assets/MenuIcon.png';

const HamburgerButton = styled.button`
  width: 5vh; // 버튼 크기 설정
  height: 5vh;
  background: none; // 기본 버튼 배경 제거
  border: none; // 기본 버튼 테두리 제거
  cursor: pointer;
  background-image: url(${icon});
  background-size: cover;
  margin: 5px;

  &:focus {
    outline: none; // 버튼 클릭 시 나타나는 테두리 제거
  }

`;

const MenuIcon = ({ toggleSidebar }) => {
  return <HamburgerButton onClick={toggleSidebar}></HamburgerButton>;
};

export default MenuIcon;
