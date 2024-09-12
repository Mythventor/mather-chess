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
    <Router basename="/mather-chess"> {/* Set the basename to match the subdirectory */}
      <div>
        <Routes>
          <Route path="/" element={<MatherChess />} /> {/* Adjust the root route */}
          <Route path="/chessboard" element={<ChessBoard />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Opening" element={<Opening />} />
          <Route path="/Beginner" element={<Beginner />} />
          <Route path="/MiddleGame" element={<MiddleGame />} />
          <Route path="/Endgame" element={<Endgame />} />

          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
