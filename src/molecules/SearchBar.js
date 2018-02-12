import React, { Component } from 'react';
import Input from 'atoms/Input';
import Button from 'atoms/Button';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <Input placeholder="search" />
        <Button
          transparent
          className="icn icn__2x icn--search p-half"
        />
      </div>
    );
  }
}

export default SearchBar;
