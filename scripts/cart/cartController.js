const cartController = {
    visKurv() {
        cartView.render()
    },

    fjernVare(index) {
        modell.viewstate.cart.splice(index, 1)
        cartView.render()
    }
}