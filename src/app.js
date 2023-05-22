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

function App({ store }) {
  const list = store.getState().list;
  const cartList = store.getState().cart;

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
      store.addItem(item);
    }, [store]),

    onDeleteFromCart: useCallback((code) => {
      store.deleteItem(code);
    }, [store])
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
