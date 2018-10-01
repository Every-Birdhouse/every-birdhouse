import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Responsive from 'react-responsive';

import logo_yellow from '../../Assets/logo_yellow.svg';
import logo_black from '../../Assets/logo_black.svg';
import './style.css';

const Default = ({ children }) => <Responsive minWidth={768} className='webResponsiveContainer' children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={768} className='responsiveContainer' children={children} />;

let logo = logo_yellow; // default it to logo_yellow

export default function Home() {
  return (
    <div className='home'>
      <Default>
        <div className='videoContainer'>
          <div className='video'>
            <iframe
              src='https://player.vimeo.com/video/267392220?title=0&byline=0&portrait=0&badge=0'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
          <div className='videoTextContainer'>
            <h4>Recent work: A Memory Drowned</h4>
            <i class="fab fa-instagram" size="3x"></i>
          </div>
        </div>
        <div className='linksContainer'>
          <img src={logo} alt="Logo" onMouseOver={() => logo = logo_black} onMouseOut={() => logo = logo_yellow}/>
          <h1 className="building">
            <Link to='/film'>
              FILM
            </Link>
          </h1>
          <h1 className="building">
            <Link to='/about'>
              ABOUT
            </Link>
          </h1>
          <h1 className="building">
            <Link to='/contact'>
              CONTACT
            </Link>
          </h1>
        </div>
      </Default>
      <Mobile>
        <p>Test</p>
      </Mobile>

    </div>
  );
}
