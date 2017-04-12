export default {
  shoppingItems (state) {
    return state.items
  },
  basketItems (state) {
    return state.basket
  },
  basketTotal (state) {
    var total = 0
    const basket = state.basket
    for (var i = 0; i < basket.length; i++) {
      var itemTotal = basket[i].quantity * basket[i].price
      total = total + itemTotal
    }
    return total
  }
}
// TODO: Need to get a list of items and items that have been added to the basket
