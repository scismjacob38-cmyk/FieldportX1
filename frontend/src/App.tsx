import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="header">Header</header>
      <div className="content">
        <aside className="sidebar">Sidebar</aside>
        <main className="main">Main Content</main>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;