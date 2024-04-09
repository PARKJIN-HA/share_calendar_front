import React from "react";


const auth = {
    isLoggedIn() {
      // 여기서는 예시로 localStorage를 사용합니다.
      // 실제 애플리케이션에서는 적절한 인증 방식을 구현해야 합니다.
      return !!localStorage.getItem("user");
    }
  };

  
  export default auth;