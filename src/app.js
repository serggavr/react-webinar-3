import React, { useCallback } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
// import Cart from "./components/cart"
import Popup from "./components/popup"

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store, cart }) {

  const list = store.getState().list;
  const cartList = cart.getState().list;

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
  }

  return (
    <>
      <PageLayout>
        <Head title='Приложение на чистом JS' />
        <Controls onAdd={callbacks.onAddItem} />
        <List list={list}
          onDeleteItem={callbacks.onDeleteItem}
          onAddToCart={callbacks.onAddToCart}
          onSelectItem={callbacks.onSelectItem} />

      </PageLayout>
      <Popup cart={cartList} callbacks={callbacks} />
    </>
  );
}

export default App;
