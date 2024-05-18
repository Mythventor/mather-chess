import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MatherChess from './components/MatherChess';
import ChessBoard from './components/ChessBoard';
import ContactUs from './components/ContactUs';
import Beginner from './components/Beginner';
import Opening from './components/Opening';
import MiddleGame from './components/MiddleGame';
import Endgame from './components/EndGame';
// import other components here

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/chessboard" element={<ChessBoard />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Opening" element={<Opening />} />
          <Route path="/Beginner" element={<Beginner />} />
          <Route path="/MiddleGame" element={<MiddleGame />} />
          <Route path="/Endgame" element={<Endgame />} />

          <Route path="/" element={<MatherChess />} />

          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
