import React, { useState } from "react";
import PropTypes from "prop-types";
import { plural } from "../../utils";
import './style.css';
import { pluralPrice } from '../../utils'

function Item(props) {

  // Счётчик выделений
  // const [count, setCount] = useState(0);

  const callbacks = {
    onClick: () => {
      props.onSelect(props.item.code);
      // if (!props.item.selected) {
      //   setCount(count + 1);
      // }
    },
    // onDelete: (e) => {
    //   e.stopPropagation();
    //   props.onDelete(props.item.code);
    // }
    onAddToCart: (e) => {
      e.stopPropagation();
      // console.log(props.item)
      props.onAddToCart(props.item);
    }
  }

  return (
    <div className={'Item' + (props.item.selected ? ' Item_selected' : '')}
    // onClick={callbacks.onClick}
    // onClick={props.onClick}
    >
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {/* {props.item.title} {count ? ` | Выделяли ${count} ${plural(count, {one: 'раз', few: 'раза', many: 'раз'})}` : ''} */}
        {props.item.title}
      </div>
      <div className="Item-price">{pluralPrice(props.item.price)}</div>
      {props.item.value && <p className="Item-value">{`${props.item.value} шт`}</p>}
      <div className='Item-actions'>
        <button className="button"
          onClick={callbacks.onAddToCart}
        // onClick={() => props.onAddToCart(props)}
        >
          Добавить
        </button>
      </div>
    </div >
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    price: PropTypes.number
    // count: PropTypes.number
  }).isRequired,
  // onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  onAddToCart: PropTypes.func,
};

Item.defaultProps = {
  // onDelete: () => { },
  onSelect: () => { },
  onAddToCart: () => { },
}

// export default React.memo(Item);
export default Item;
