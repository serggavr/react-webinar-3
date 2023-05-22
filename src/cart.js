import Store from "./store";

class Cart extends Store {

  addItem(item) {
    let itemAlreadyInCart = false
    const arr = this.state.list.map(el => {
      if (el.code === item.code) {
        el.value++
        itemAlreadyInCart = true
        return el
      } else {
        return el
      }
    })
    if (itemAlreadyInCart) {
      this.setState({ ...this.state, list: [...arr] })
    } else {
      this.setState({ ...this.state, list: [...this.state.list, { code: item.code, title: item.title, price: item.price, value: 1 }] })
    }
  }

  deleteItem(item) {
    this.setState({ ...this.state, list: [...this.state.list.filter(el => el.code !== item.code)] })
  }
}

export default Cart;