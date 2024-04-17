import React, { forwardRef } from 'react';
// ... 모달 컴포넌트 스타일링

const NotificationModal = forwardRef((props, ref) => {
  return (
    <ModalContainer ref={ref}>
      {/* 모달 내용 */}
    </ModalContainer>
  );
});

export default NotificationModal;
