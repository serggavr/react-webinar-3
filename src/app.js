import React, { useCallback, useEffect, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Popup from "./components/popup"
import { pluralPrice, calculateSum, calculateQuantity } from './utils';
import './app.css'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store, cart }) {
  const list = store.getState().list;
  const cartList = cart.getState().list;

  const [sumInCart, setSumInCart] = useState('')
  const [quantityItemsInCart, setQuantityItemsInCart] = useState(0)
  const [popupIsOpen, setPopupIsOpen] = useState(false)

  const handlePopupToggle = () => {
    setPopupIsOpen(!popupIsOpen)
    console.log(popupIsOpen)
  }

  const handleSetSumInCart = (cartList) => {
    setSumInCart(pluralPrice(calculateSum(cartList)))
  }

  const handleSetQuantityItemsInCart = (cartList) => {
    setQuantityItemsInCart(calculateQuantity(cartList))
  }

  useEffect(() => {
    handleSetSumInCart(cartList)
    handleSetQuantityItemsInCart(cartList)
  }, [cartList])

  const callbacks = {
    onAddToCart: useCallback((item) => {
      cart.addItem(item);
    }, [cart]),

    onDeleteFromCart: useCallback((item) => {
      cart.deleteItem(item);
    }, [cart])
  }

  return (
    <>
      <PageLayout>
        <Head title='Магазин' />
        <Controls
          quantityItemsInCart={quantityItemsInCart}
          sumInCart={sumInCart}
          itemButtonText="Перейти"
          handleButtonClick={handlePopupToggle}
        />
        <List list={list}
          onDeleteItem={callbacks.onDeleteItem}
          onButtonClick={callbacks.onAddToCart}
          itemButtonText="Добавить"
        />

      </PageLayout>
      <Popup
        isOpen={popupIsOpen}
        onPopupToggle={handlePopupToggle}
        cart={cartList}
        sumInCart={sumInCart}
        quantityItemsInCart={quantityItemsInCart}
        itemButtonText="Удалить"
        onButtonClick={callbacks.onDeleteFromCart}
      />
    </>
  );
}

export default App;
