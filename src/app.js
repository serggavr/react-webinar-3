import React, { useCallback, useEffect, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
// import Cart from "./components/cart"
import Popup from "./components/popup"
import { pluralPrice, calculateSum, calculateQuantity } from './utils';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store, cart }) {

  const list = store.getState().list;
  const cartList = cart.getState().list;
  const [sumInCart, setSumInCart] = useState(0)
  const [quantityItemsInCart, setQuantityItemsInCart] = useState(0)

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
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store, cart]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store, cart]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store, cart]),

    onAddToCart: useCallback((item) => {
      cart.addItem(item);
    }, [store, cart]),

    onDeleteFromCart: useCallback((item) => {
      cart.deleteItem(item);
    }, [store, cart])
  }

  return (
    <>
      <PageLayout>
        <Head title='Приложение на чистом JS' />
        <Controls onAdd={callbacks.onAddItem} quantityItemsInCart={quantityItemsInCart} sumInCart={sumInCart} />
        <List list={list}
          onDeleteItem={callbacks.onDeleteItem}
          onButtonClick={callbacks.onAddToCart}
          onSelectItem={callbacks.onSelectItem}
          itemButtonText="Добавить"
        // onSetSumInCart={handleSetSumInCart}
        />

      </PageLayout>
      <Popup
        cart={cartList}
        callbacks={callbacks}
        sumInCart={sumInCart}
        quantityItemsInCart={quantityItemsInCart}

        itemButtonText="Удалить"
        onButtonClick={callbacks.onDeleteFromCart}
      // onDeleteFromCart={callbacks.onDeleteFromCart}
      // onSetSumInCart={handleSetSumInCart} 
      />
    </>
  );
}

export default App;
