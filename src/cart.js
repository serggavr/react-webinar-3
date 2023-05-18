import Store from "./store";

class Cart extends Store {
  // constructor(initState = {}) {
  //   super(state)
  // }
  // checkItem(item) {
  //   this.list.forEach()
  // }

  addItem(item) {
    // console.log(item)
    console.log(this.state)
    // console.log(Object.values(this.state))
    // const arr = Object.values(this.state)[0].filter(el => el.code === item.code)
    // console.log(arr)
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
    console.log(itemAlreadyInCart)
    // console.log(arr)
    if (itemAlreadyInCart) {
      this.setState({ ...this.state, list: [...arr] })
      // this.state({
      //   ...this.state,
      //   // list: [...this.state.list, { code: item.code, title: item.title, price: item.price, value: 1 }]
      //   list: [...arr]
      // })
    } else {
      this.setState({ ...this.state, list: [...this.state.list, { code: item.code, title: item.title, price: item.price, value: 1 }] })
      // this.state({
      //   ...this.state,
      //   list: [...arr]
      // })
      // console.log('else')
    }
    console.log(this.state)

    // this.state({
    //   ...this.state,
    //   // list: [...this.state.list, { code: item.code, title: item.title, price: item.price, value: 1 }],
    //   list: [this.state.list.map(el => {
    //     if (el.code === item.code) {
    //       el.value++
    //       return el
    //     } else {
    //       return el
    //     }
    //   })]
    // })


    // if (this.state.filter(el => el.code === item.code) > 0) {
    //   console.log('asd')
    // }
    // this.state({
    //   ...this.state,
    //   list: [...this.state.list, { code: item.code, title: item.title, price: item.price, value: 1 }]
    // })
  }
}

export default Cart;