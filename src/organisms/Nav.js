import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

class Nav extends Component {
  static propTypes = {
    links: PropTypes.array,
    logo: PropTypes.node,
  };

  render() {
    return (
      <nav>
        <div className="nav__logo">
          {this.props.logo}
        </div>
        <div className="nav__menu">
          <div className="icn icn--hamburger" />
        </div>
        <div className="nav__links">
          {this.props.links.map((link, i) => {
            const { isExternal, href, title, handleClick } = link;
            return (
              <Button
                className={i !== 0 ? 'separator' : ''}
                href={href}
                isLink={isExternal}
                handleClick={handleClick}
                large
                transparent
              >
                {link.title}
              </Button>
            );
          })}
        </div>
      </nav>
    );
  }
}


export default Nav;
