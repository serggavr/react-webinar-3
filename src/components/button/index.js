import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Button({
  // onAdd,
  // onOpenCart,
  // cart
  onClick,
  text
}) {
  // function onClick(callback) {
  //   callback()
  // }
  function callback(e) {
    e.stopPropagation()
    onClick()
  }

  return (
    <button className='button' onClick={(e) => callback(e)}>{text}</button>
  )
}

// Controls.propTypes = {
//   // onAdd: PropTypes.func,
//   onOpenCart: PropTypes.func,
// };

// Controls.defaultProps = {
//   // onAdd: () => {},
//   onOpenCart: () => { }
// }

export default React.memo(Button);
