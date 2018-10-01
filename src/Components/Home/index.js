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
    <div>
      <Default>
        <div className='leftContainer'>
          <iframe
            src='https://player.vimeo.com/video/289155044'
            title='A Memory Drowned Trailer'
            frameBorder='0'
            height='750'
            width='750'
            webkitAllowFullScreen
            mozAllowFullScreen
            allowFullScreen
          />
        </div>
        <div className='rightContainer'>
          <img
            src={logo}
            alt='Every Birdhouse Media Logo'
            className='logoImg'
          />
          <div className='aboutContainer'>
            <p>
              Ever curious filmmaker.<br/>
              Director, Producer, Writer, Editor, and Colorist.<br/>
              Currently based in Portland, OR.
            </p>
          </div>
          <div className='socialMediaContainer'>
            <p>say hello</p>
            <a href='https://www.instagram.com/hello.arthurj/'>
              <i className='fab fa-instagram socialMediaIcon'></i>
            </a>
            <a href='https://www.facebook.com/arthur.j.carueso'>
              <i className='fab fa-facebook-square socialMediaIcon'></i>
            </a>
            <a href='https://vimeo.com/everybirdhousemedia'>
              <i className='fab fa-vimeo-v socialMediaIcon'></i>
            </a>
          </div>
        </div>
      </Default>
      <Mobile>
        <p>Test</p>
      </Mobile>

    </div>
  );
}
