import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Button({
  // onAdd,
  // onOpenCart,
  // cart
  callback,
  text
}) {
  // function onClick(callback) {
  //   callback()
  // }

  return (
    <button className='button' onClick={() => callback()}>{text}</button>
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
