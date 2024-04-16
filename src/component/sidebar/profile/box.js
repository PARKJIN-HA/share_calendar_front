import React from 'react';
import styled from 'styled-components';

// 전체 프로필 컨테이너
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #4e5d6c; // 적절한 배경색으로 변경 가능
  padding: 20px;
  width: 360px; // 컨테이너 전체 너비
  color: white;
`;

// 프로필 이미지를 위한 컴포넌트
const ProfileImage = styled.div`
  width: 80px; // 이미지 크기
  height: 80px;
  border-radius: 50%; // 원형으로 만들기
  background-color: white; // 이미지 대신 흰색 배경
  margin-right: 20px;
`;

// 이름과 직책을 담는 컴포넌트
const ProfileInfo = styled.div`
  font-family: 'Arial', sans-serif; // 폰트는 변경 가능

  h2 {
    margin: 0;
    font-size: 24px; // 이름 폰트 크기
  }

  p {
    margin: 0;
    font-size: 16px; // 직책 폰트 크기
  }
`;

// 버튼 그룹 컨테이너
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column; // 버튼을 수직으로 정렬
  align-items: center;
  justify-content: center;
`;

// 개별 버튼
const Button = styled.button`
  background-color: #6c7a89; // 버튼 배경색
  color: white;
  border: 1px solid #5a6978; // 버튼 테두리
  border-radius: 4px;
  padding: 5px 10px; // 안쪽 여백
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  margin: 5px 0; // 상하 마진

  &:hover {
    background-color: #5a6978; // 호버 시 색상 변경
  }

  &:first-child {
    margin-top: 0; // 첫 번째 버튼 상단 마진 제거
  }

  &:last-child {
    margin-bottom: 0; // 마지막 버튼 하단 마진 제거
  }
`;

// 프로필 컴포넌트 전체 레이아웃
const ProfileBox = () => {
  return (
    <ProfileContainer>
      <ProfileImage />
      <ProfileInfo>
        <h2>PARK JINHA</h2>
        <p>Leader</p>
      </ProfileInfo>
      <ButtonGroup>
        <Button>settings</Button>
        <Button>LogOut</Button>
      </ButtonGroup>
    </ProfileContainer>
  );
};

export default ProfileBox;
