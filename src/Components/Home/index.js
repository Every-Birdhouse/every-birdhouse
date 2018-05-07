import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Responsive from 'react-responsive';

import AMD from '../../Assets/AMD.jpeg'; // Tell Webpack this JS file uses this image
import './style.css';

const Default = ({ children }) => <Responsive minWidth={768} className='webResponsiveContainer' children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={768} className='responsiveContainer' children={children} />;

export default function Home() {
  return (
    <div className='home'>
      <Default>
        <div className='webImage'>
          <img src={AMD} alt='A Memory Drowned' className='imageContainer'/>
        </div>
        <div className='linksContainer'>
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
