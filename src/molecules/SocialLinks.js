import React from 'react';

const SocialLinks = (props) => {
  return (
    <div>
      <ul className="social-links">
        {props.links.map((link) => {
          return (
            <li>
              <a href={link.url}>
                <span className={`icn icn--lg icn--${link.name}`} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


/* <div className="subscribe">
  <div className="content-top">
    <h1 style={{ margin: '0 auto', textAlign: 'center' }}>Subscribe</h1>
  </div>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridColumnGap: '32px', padding: '16px 48px', margin: '0 10%' }}>
    <button style={{ height: '100%' }} className="btn btn--secondary">iTunes</button>
    <button style={{ height: '100%' }} className="btn btn--secondary">Souncloud</button>
    <button style={{ height: '100%' }} className="btn btn--secondary">Stitcher</button>
  </div>
</div> */

export default SocialLinks;
