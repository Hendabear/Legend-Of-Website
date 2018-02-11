import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../organisms/Nav';
import logo from '../LoW_assets/logo_150.gif';

const navLinks = [
  { title: 'Episodes' },
  { title: 'Archive' },
  { title: 'About Us' },
  { title: 'Blog' },
];

const Landing = (props) => {
  return (
    <div>
      <div className="page">
        <Nav
          links={navLinks}
          logo={<img src={logo} />}
        />
        <div className="page-content content-container">
          <div className="header">
            <blockquote style={{ backgroundColor: '#ccc', maxWidth: '50%', minHeight: '100%', margin: '0 auto', padding: '8px', borderRadius: '4px' }}>
              Avatar: The Last Airbender is a show that affected me deeply and stuck with me over the years." That’s something we’ve heard from countless people of all ages since the show aired in 2005.
              <br /><br />
              The Legend of Portalcast is a reunion of hosts from the podcast Portalcast that was started over 10 years ago when Avatar: The Last Airbender was airing on Nickelodeon. We all became friends through the Avatar fan forums or connected in person and shared our intellectual, prophetical, and humorous opinions.
              <br /><br />
              In this new podcast, we revisit themes, characters, and episodes from the original series and reflect on how the show has shaped us—from raising kids, to starting businesses, to dealing with loss and grief, Avatar: The Last Airbender has been the common thread.
            </blockquote>
          </div>
          <div className="subscribe">
            <div className="content-top">
              <h1 style={{ margin: '0 auto', textAlign: 'center' }}>Subscribe</h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridColumnGap: '32px', padding: '16px 48px', margin: '0 10%' }}>
              <button style={{ height: '100%' }} className="btn btn--secondary">iTunes</button>
              <button style={{ height: '100%' }} className="btn btn--secondary">Souncloud</button>
              <button style={{ height: '100%' }} className="btn btn--secondary">Stitcher</button>
            </div>
          </div>
          <div className="episodes">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridColumnGap: '32px', padding: '1rem' }}>
              {["http://lorempixel.com/output/abstract-q-c-200-200-6.jpg",
                "http://lorempixel.com/output/abstract-q-c-200-200-2.jpg",
                "http://lorempixel.com/output/abstract-q-c-200-200-4.jpg"].map((url) => {
                  return (
                    <div>
                      <div style={{ textAlign: 'center' }}>
                        <img style={{ margin: '0 auto' }} src={url} />
                      </div>
                      <div>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&show_artwork=false">
                        </iframe>
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <div style={{ float: 'right', padding: '1em' }}><button style={{ height: '100%' }} className="btn btn--default">Archive</button></div>
          </div>
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
