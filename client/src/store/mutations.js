export default {
  changeBasket (state, payload) {
    const item = state.items.find(item => {
      return item.id === payload[0]
    })
    item.quantity = payload[1]
    const basketItem = state.basket.find(basketItem => {
      return basketItem.id === payload[0]
    })
    if (basketItem === undefined) {
      state.basket.push(item)
    }
    else {
      if (payload[1] === 0) {
        state.basket.splice(basketItem.id, 1)
      }
      else {
        basketItem.quantity = payload[1]
      }
    }
  }
}
