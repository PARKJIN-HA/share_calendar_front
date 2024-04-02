import React from 'react';
import {createRoot} from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
export default App;

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);