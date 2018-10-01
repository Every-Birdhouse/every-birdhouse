import React from 'react';
import Responsive from 'react-responsive';

import logo from '../../Assets/logo_yellow.svg';
import './style.css';

const Default = ({ children }) => <Responsive minWidth={992} className='webResponsiveContainer' children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={991} className='responsiveContainer' children={children} />;

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
            allowFullScreen
          />
        </div>
        <div className='rightContainer'>
          <img
            src={logo}
            alt='Every Birdhouse Media Logo'
            className='logoImg'
          />
          <div>
            <p>
              Every film, a birdhouse. An invitation.<br/>
              Director, Producer, Writer, Editor, and Colorist.<br/>
              Portland, OR.
            </p>
          </div>
          <div className='socialMediaContainer'>
            <a href='https://www.instagram.com/hello.arthurj/'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='https://www.facebook.com/arthur.j.carueso'>
              <i className='fab fa-facebook-square socialMediaIcon'></i>
            </a>
            <a href='https://vimeo.com/everybirdhousemedia'>
              <i className='fab fa-vimeo-v'></i>
            </a>
          </div>
        </div>
      </Default>
      <Mobile>
          <img
            src={logo}
            alt='Every Birdhouse Media Logo'
            className='logoImg'
          />
          <div>
            <p>
              Every film, a birdhouse. An invitation.<br/>
              Director, Producer, Writer, Editor, and Colorist.<br/>
              Portland, OR.
            </p>
          </div>
          <div className='socialMediaContainer'>
            <a href='https://www.instagram.com/hello.arthurj/'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='https://www.facebook.com/arthur.j.carueso'>
              <i className='fab fa-facebook-square responsiveSocialMediaIcon'></i>
            </a>
            <a href='https://vimeo.com/everybirdhousemedia'>
              <i className='fab fa-vimeo-v'></i>
            </a>
          </div>
          <h4>
            NOW SHOWING
          </h4>
          <i className="far fa-long-arrow-alt-down arrowSpacing"></i>
          <Responsive minWidth={768} maxWidth={991}>
            <iframe
              src='https://player.vimeo.com/video/289155044'
              title='A Memory Drowned Trailer'
              frameBorder='0'
              height='500'
              width='500'
              allowFullScreen
            />
          </Responsive>
          <Responsive maxWidth={767}>
            <iframe
              src='https://player.vimeo.com/video/289155044'
              title='A Memory Drowned Trailer'
              frameBorder='0'
              allowFullScreen
            />
          </Responsive>
      </Mobile>
    </div>
  );
}
