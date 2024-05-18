import React from 'react';
import './ContactUs.css';
import MrBuse from './Chess/MrBuse.jpg'; 
import { Link } from 'react-router-dom';


function ContactUs() {
    return (
      <div>
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="MatherChess.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet" />
          <title>Mather High School Chess Club</title>
        </head>
  
        <body>
          {/* Title */}
          <Link className="link" to="/"><h1>Mather High School Chess Club</h1></Link>
  
          {/* Dropdown menu */}
          <div className="wrap">
            <span className="decor"></span>
            <nav>
              <ul className="primary">
                <li>
                  <a href="#/">About us</a>
                  <ul className="sub">
                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeGsXf1eD_zoCgVpsHSsyMoDjLzyhGMaT5GhIL2p5E0P7-NMA/viewform?hr_submission=ChkI7aWJv54BEhAI9vq9wMEOEgcI_qjMk8QBEAE">Join Chess Club</a></li>
                    <li><a href="https://classroom.google.com/c/NTI2NTQ0NDU2OTRa?cjc=6vjhjml">Google Classroom</a></li>
                    <li><a href="https://twitter.com/MatherChess">Twitter</a></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#/">Official chess platform</a>
                  <ul className="sub">
                    <li><a href="https://lichess.org/">Lichess</a></li>
                    <li><a href="https://chess.com">Chess.com</a></li>
                    <li><a href="https://www.chesskid.com/">ChessKid</a></li>
                  </ul>
                </li>
                <li><Link to="/chessboard">Chessboard</Link></li>
                <li>
                  <a href="#/">Chess Lesson</a>
                  <ul className="sub">
                    <li><Link to="/beginner">Beginner</Link></li>
                    <li><Link to="/opening">Opening</Link></li>
                    <li><Link to="/middlegame">Middle game</Link></li>
                    <li><Link to="/endgame">End game</Link></li>
                  </ul>
                </li>
                <li><a href="https://cpschess.org/">Upcoming Tournament</a></li>
                <li><a href="https://results.cpschess.org/">Tournament Results</a></li>
              </ul>
            </nav>
          </div>

        <p style={{ fontSize: '20px' }}><b>Mr. Buse</b></p>
        <img className="contactUsPic" src={MrBuse} alt="Mr. Buse" />
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', textTransform: 'none' }}>Email: jbuse@cps.edu</p>
      </body>
    </div>
  );
}

export default ContactUs;
