const cartController = {
    visKurv() {
        visHandlekurv()
    },

    fjernVare(index) {
        modell.viewstate.cart.splice(index, 1)
        visHandlekurv()
    }
}