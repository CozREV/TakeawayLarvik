function gåTilBetaling() {
    modell.app.currentView = "Betaling";
    updateView();
}

const betalingController = {
    bekreftBetaling() {
        modell.viewstate.cart = [];
        alert("Betaling godkjent! Takk for din bestilling 🎉");
        modell.app.currentView = "Home";
        updateView();
    }
}