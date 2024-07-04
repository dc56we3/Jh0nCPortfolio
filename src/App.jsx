import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';

function App() {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <>
      <Navbar activeIcon={activeIcon} />
      <Content setActiveIcon={setActiveIcon} />
    </>
  );
}

export default App;