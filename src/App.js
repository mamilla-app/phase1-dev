import React, { useState } from 'react';
import { NavBar } from './components/nav-bar';

const pages = {
  home:    <div style={{ padding: '40px', fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Home</div>,
  explore: <div style={{ padding: '40px', fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Explore</div>,
  saved:   <div style={{ padding: '40px', fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Saved</div>,
  support: <div style={{ padding: '40px', fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Support</div>,
};

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <div style={{ position: 'absolute', inset: '0 0 87px 0', overflowY: 'auto' }}>
        {pages[activePage]}
      </div>
      <NavBar activePage={activePage} onNavigate={setActivePage} />
    </>
  );
}

export default App;
