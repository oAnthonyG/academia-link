import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import JournalPage from './pages/JournalPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/forum' element={<ForumPage />} />
        <Route exact path='/jornal' element={<JournalPage />} />
      </Routes>

    </Router>
  );
}

export default App;
