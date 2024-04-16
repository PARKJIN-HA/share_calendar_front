// src/component/Sidebar/GroupName.js
import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@sidebar/icon'; // Icon 컴포넌트의 실제 경로로 수정하세요.

const GroupHeader = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px; // 양 옆의 패딩은 디자인에 맞게 조정하세요.
  height: 15vh; // 디자인에 맞게 높이 조정
`;

const GroupNameText = styled.h1`
  font-size: 46px; // 글자 크기는 디자인에 맞게 조정하세요.
  font-weight: bold;
  color: #2C3E50;
  padding-right:50px;;
`;

const Groupbind = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GroupLine = styled.div`
  background-color: #475069; // 여기서 선의 색을 원하는 색으로 설정하세요.
  height: 5px; // 선의 높이를 디자인에 맞게 조정하세요.
  width: 100%; // 선의 너비를 디자인에 맞게 조정하세요.
`;

// 여기에 햄버거 아이콘을 위한 스타일 컴포넌트를 추가할 수 있습니다.
// Icon 컴포넌트가 이미 스타일링 되어 있다면, 추가 스타일은 필요하지 않을 수 있습니다.

const GroupName = ({toggleSidebar}) => {
  return (
    <GroupHeader>
      <Groupbind>
      {/* 여기서 Icon 컴포넌트를 사용하세요. */}
      <GroupNameText>Group Name</GroupNameText>
      {/* 필요하다면 여기에 다른 요소를 추가하세요. */}
      <MenuIcon toggleSidebar={toggleSidebar}/>
      </Groupbind>
      <GroupLine />
    </GroupHeader>
  );
};

export default GroupName;
