import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  state = {
    selected: null,
  };

  handleSelect = (indicator) => {
    this.setState({ selected: indicator });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }} className={this.props.className | ''}>
        <div className="deck">
          {this.props.cards.map((cardRender, i) => {
            return (
              <div key={i} className="card">
                {cardRender(this.state.selected, this.handleSelect)}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.func),
  className: PropTypes.string,
};

export default Deck;
