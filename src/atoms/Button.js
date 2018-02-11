import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = (props) => {
  const {
    children,
    className: propsClassName,
    handleClick,
    transparent,
    isLink,
    href,
    primary,
    secondary,
    small,
    large,
    wide,
    fullWidth,
    isDisabled,
    ...buttonProps,
  } = props;

  const buttonClasses = classnames('btn', {
    'btn--transparent': transparent,
    'btn--primary': primary,
    'btn--secondary': secondary,
    'btn--default': !transparent && !primary && !secondary,
    'btn--sm': small,
    'btn--lg': large,
    'btn--wide': wide,
    'btn--full': fullWidth,
    'is-disabled': isDisabled,
  });

  return isLink
    ? (
      <a className={`${buttonClasses} ${propsClassName}`} href={href} {...buttonProps}>{children}</a>
    ) : (
      <button className={`${buttonClasses} ${propsClassName}`} onClick={handleClick} {...buttonProps}>{children}</button>
    );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  handleClick: PropTypes.func,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  large: PropTypes.bool,
  isLink: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  transparent: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
