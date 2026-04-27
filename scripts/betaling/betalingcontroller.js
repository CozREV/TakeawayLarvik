function goToPay() {
    modell.app.currentView = "Betaling";
    updateView();
}



const betalingController = {
    confirmPayment() {
        modell.viewstate.cart = [];
        modell.app.currentView = "Bekreftelse";
        updateView();
    }
}