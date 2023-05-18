import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({
  // onAdd,
  onOpenCart,
  cart
}) {
  return (
    <div className='Controls'>
      <div className='Controls-info-block'>В Корзине:
        {/* {card.length > 0 ? `${card.length} товара / сумма` : `пусто`} */}
        <span className="Controls-cart-info">{1 > 0 ? `2 товара / сумма` : `пусто`}</span>

      </div>
      <button className='button' onClick={() => onOpenCart()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  // onAdd: PropTypes.func,
  onOpenCart: PropTypes.func,
};

Controls.defaultProps = {
  // onAdd: () => {},
  onOpenCart: () => { }
}

export default React.memo(Controls);
