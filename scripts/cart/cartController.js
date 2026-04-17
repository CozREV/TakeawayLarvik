const cartController = {
    showProduct() {
        showCart()
    },

    removeProduct(index) {
        modell.viewstate.cart.splice(index, 1)
        showCart()
    }
}