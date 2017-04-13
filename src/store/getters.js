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
      var itemTotal = basket[i].quantity * basket[i].priceLarge
      total = total + itemTotal
    }
    return total
  },
  basketItemNumber (state) {
    var basketTotalItems = 0
    const basket = state.basket
    for (var i = 0; i < basket.length; i++) {
      basketTotalItems = basket[i].quantity + basketTotalItems
    }
    console.log(basketTotalItems)
    return basketTotalItems
  }
}
// TODO: Need to get a list of items and items that have been added to the basket
