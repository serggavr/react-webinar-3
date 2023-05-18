import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";

function Controls({
  // onAdd,
  onOpenCart,
  quantityItemsInCart,
  sumInCart
}) {
  return (
    <div className='Controls'>
      <div className='Controls-info-block'>В Корзине:
        <span className="Controls-cart-info">{quantityItemsInCart ? `${quantityItemsInCart} ${plural(quantityItemsInCart, { one: 'товар', few: 'товара', many: 'товаров' })} / ${sumInCart}` : 'пусто'}</span>

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
