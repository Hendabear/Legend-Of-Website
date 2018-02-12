import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../molecules/SocialLinks';
import Nav from '../organisms/Nav';
import Banner from '../organisms/Banner';
import Deck from '../molecules/Deck';
import logoSmall from '../LoW_assets/logo_150.gif';
import {
  PORTAL_CAST_SUBSCRIBE_LINKS,
  PORTAL_CAST_NAV_LINKS,
} from '../utils/constants';

const Landing = (props) => {
  return (
    <div>
      <div className="page">
        <Nav
          links={PORTAL_CAST_NAV_LINKS}
          logo={<img src={logoSmall} />}
        />
        <div className="page-content content-container">
          <Banner />
          <div style={{
            width: '50%',
            textAlign: 'center',
            margin: '1em auto',
            border: '1px solid black',
          }} className="card">
            <h2 style={{ color: 'black' }}>Subscribe</h2>
            <SocialLinks links={PORTAL_CAST_SUBSCRIBE_LINKS} />
          </div>
          <Deck
            className="episodes"
            cards={["http://lorempixel.com/output/abstract-q-c-200-200-6.jpg",
              "http://lorempixel.com/output/abstract-q-c-200-200-2.jpg",
              "http://lorempixel.com/output/abstract-q-c-200-200-4.jpg"].map((url, i) => {
                return (selected, handleToggle) => (
                  <div>
                    <div
                      onClick={() => handleToggle(url)}
                      style={{
                        textAlign: 'center',
                        backgroundImage: `url(${url})`,
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                        height: '13em',
                        backgroundSize: 'cover',
                      }} />
                    <div style={{ maxHeight: '100px', backgroundColor: 'var(--color-white-1)' }}>
                      {url !== selected && <p><strong>S1E1</strong><br />Meow meow meow meow meow <br />meow meow meow meow meow</p>}
                      <iframe style={selected == url ? {} : { display: 'none' }} width="100%" height="100" scrolling="no" frameborder="no"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&show_artwork=false">
                      </iframe>
                    </div>
                  </div>
                );
              })}
          />
          <div style={{ textAlign: 'center' }}><button style={{ height: '100%' }} className="btn btn--default">Archive</button></div>
          <div className="hosts">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridColumnGap: '1em', padding: '1rem' }}>
              {["http://lorempixel.com/output/cats-q-c-200-200-4.jpg",
                "http://lorempixel.com/output/cats-q-c-200-200-9.jpg",
                "http://lorempixel.com/output/cats-q-c-200-200-8.jpg",
                "http://lorempixel.com/output/cats-q-c-200-200-5.jpg",
                "http://lorempixel.com/output/cats-q-c-200-200-1.jpg"].map((url) => {
                  return (
                    <div>
                      <img src={url} />
                      <div>
                        C. Aterton
                        <p>Meow meow meow meow meow meow meow meow meow meow</p>
                        <p>Meow meow meow meow meow meow meow meow meow meow</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Landing;
