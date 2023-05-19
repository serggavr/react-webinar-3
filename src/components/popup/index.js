import React from "react";
import PropTypes from 'prop-types';
import Head from "../head";
import Button from "../button";
import List from '../list'
import './style.css';

function Popup({
  cart,
  sumInCart,
  itemButtonText,
  onButtonClick,
  isOpen,
  onPopupToggle
}) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__header">
          <Head title='Корзина'>
            <Button buttonText="Закрыть" onClick={onPopupToggle} />
          </Head>
        </div>
        <div className="popup__content">
          <List
            list={cart}
            itemButtonText={itemButtonText}
            onButtonClick={onButtonClick}
          />
          <div className="popup__info-block">
            <span className="popup__info-block-text">Итого</span>
            <span>{sumInCart}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Popup.propTypes = {
  cart: PropTypes.array,
  sumInCart: PropTypes.string,
  itemButtonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  isOpen: PropTypes.bool,
  onPopupToggle: PropTypes.func
};

Popup.defaultProps = {
  cart: [],
  sumInCart: '',
  itemButtonText: '',
  isOpen: false,
  onButtonClick: () => { },
  onPopupToggle: () => { }
}

export default React.memo(Popup);