import React from "react";
import PropTypes from 'prop-types';
import "./CardBtn.css";

class CardBtn extends React.Component {

  render () {
    const { onClick, style } = this.props

    return (
      <div
        onClick={onClick}
        // className={`card-btn`}
        {...style}
        // data-value={dataValue}
      >
      {this.props.children}
      </div>
    );
  }
}

CardBtn.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object
}

export default CardBtn;
