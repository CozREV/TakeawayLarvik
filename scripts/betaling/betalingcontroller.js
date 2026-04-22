function gåTilBetaling() {
    modell.app.currentView = "Betaling";
    updateView();
}



const betalingController = {
    bekreftBetaling() {
        modell.viewstate.cart = [];
        modell.app.currentView = "Bekreftelse";
        updateView();
    }
}