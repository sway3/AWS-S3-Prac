import React from 'react';

// components
import Main from './pages/Main';
import ImageBoard from './components/ImageBoard';

//router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/imageboard' element={<ImageBoard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
