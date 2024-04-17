import React from 'react';
import styled from 'styled-components';
import bellIcon from '@assets/bell.png'; // 알림 아이콘 이미지 경로에 맞게 수정해주세요. 확장자가 svg, png, jpg 일 수 있습니다.

// 버튼 스타일링
const IconButton = styled.button`
  width: 3vh; // 버튼 크기 설정
  height: 1vh;
  padding: 0; // 패딩 제거
  border: none; // 테두리 제거
  background: none; // 배경 제거
  position: absolute; // 절대 위치 사용
  top: 5px; // 상단으로부터 50% 위치
  right: 20px; // 오른쪽 경계선에 맞춤
  cursor: pointer; // 마우스 오버 시 커서 변경

  &:focus {
    outline: none; // 포커스 시 아웃라인 제거
  }
`;

const NotificationIcon = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <img src={bellIcon} alt="Notification bell icon" />
    </IconButton>
  );
};

export default NotificationIcon;
