// src/component/Sidebar/MenuContent.js
import React from 'react';
import styled from 'styled-components';

const MenuBox = styled.div`
  width: 400px; // 메뉴 전체의 너비
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #C3CEE1;
  display: flex;
  flex-direction: column; // 아이템들을 세로로 정렬 
  justify-content: flex-start;
  align-items: center;
`;

const MenuItem = styled.button`
  border: none;
  box-shadow: 0px 2px 5px #AFBACE;
  width: 345px;
  height: 77px;
  color: #ffffff;
  background-color: #8E9FBB;
  font-family: "Inter-Regular", Helvetica;
  font-size: 40px;
  display: flex;
  align-items: center;
  padding-left: 23px; // 각 메뉴 아이템의 텍스트 위치
  /* 아이템 간 구분을 위한 스타일링, 예를 들어 border-bottom을 추가할 수 있습니다. */
  &:not(:last-child) {
    margin-bottom:15px; // 마지막 아이템을 제외한 모든 아이템에 적용
  }
`;

const MenuContent = () => {
  return (
    <MenuBox>
      <MenuItem>HOME</MenuItem>
      <MenuItem>Calendar</MenuItem>
      <MenuItem>Gantt</MenuItem>
      <MenuItem>To-Do</MenuItem>
      {/* 메뉴 아이템 추가 */}
    </MenuBox>
  );
};

export default MenuContent;
