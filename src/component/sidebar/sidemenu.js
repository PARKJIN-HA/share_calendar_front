// src/component/Sidebar/Sidebar.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MenuIcon from '@sidebar/icon';
import MenuContent from '@sidebar/content';

const SidebarContainer = styled.div`
  margin: 0%;
  padding: 0%;
  width: 100px;
  transition: width 0.3s ease-in-out;
  background-color: #8e9fbb;
  /* SidebarContainer에 대한 나머지 스타일 */
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // 외부 클릭을 감지하기 위한 이벤트 리스너
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // 사이드바 바깥을 클릭하면 닫힘
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
      {isOpen ? <MenuContent /> : <MenuIcon toggleSidebar={toggleSidebar} />}
    </SidebarContainer>
  );
};

export default Sidebar;
