const cartController = {
    addToCart(productId) {
        modell.viewstate.cart.push({
            productId: productId,
            quantity: 1,
            comment: "",
            drinkId: []
        })
    },
    
    showProduct() {
        showCart()
    },

    removeProduct(index) {
        modell.viewstate.cart.splice(index, 1)
        showCart()
    }
}