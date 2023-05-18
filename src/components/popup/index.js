import React from "react";
import PropTypes from 'prop-types';
import Head from "../head";
import Button from "../button";
import './style.css';
import Item from "../item";
import List from '../list'
import { pluralPrice, calculateSum } from "../../utils";

function Popup({
  cart,
  callbacks,
  sumInCart,
  itemButtonText,
  onDeleteFromCart,
  onButtonClick
  // onOpenCart,
  // isOpen,
  // onClose,
  // children
}) {

  // function calculateSum(list) {
  //   return list.reduce((sum, item) => sum + item.price, 0)
  // }

  return (
    <div className="popup">
      <div className="popup_container">
        <div className="popup_header">
          <Head title='Корзина'>
            <Button text="Закрыть" onClick={() => console.log('!!')} />
          </Head>
        </div>
        <div className="popup_content">
          <List
            list={cart}
            itemButtonText={itemButtonText}
            onButtonClick={onButtonClick}
            onSelectItem={callbacks.onSelectItem}

          />
          <div className="popup_info-block">
            Итого:
            {/* <span>{pluralPrice(calculateSum(cart))}</span> */}
            <span>{sumInCart}</span>
          </div>
        </div>
      </div>
    </div>
    // <div className={`popup ${isOpen && `popup_opened`}`}>
    //   <div className="popup__container">
    //     <button
    //       className="popup__close-button"
    //       type="button"
    //       aria-label="Закрыть"
    //       onClick={onClose}
    //     ></button>

    //   </div>
    // </div>

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

export default React.memo(Popup);