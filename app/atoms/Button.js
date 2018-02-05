import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = (props) => {
  const {
    children,
    className: propsClassName,
    handleClick,
    transparent,
    ...buttonProps,
  } = props;

  const buttonClasses = classnames('btn', {
    'btn--transparent': transparent,
  });

  return (
    <button className={`${buttonClasses} ${propsClassName}`} onClick={handleClick} {...buttonProps}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  transparent: PropTypes.bool,
};


export default Button;
