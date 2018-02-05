import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'molecules/SearchBar';

class Landing extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div className="page">
        <SearchBar />
        <div className="page__body">{this.props.children}</div>
      </div>
    );
  }
}

export default Landing;
