import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@sidebar/sidemenu';

const App = () => {
    return (
      <div>
        <Sidebar />
        <h1>Hello, World!</h1>
        <Outlet />
      </div>
    );
  }
  export default App;
  