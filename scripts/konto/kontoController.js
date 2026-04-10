function visKonto(){
    modell.app.currentView = "Konto";
    document.getElementById("main").innerHTML = kontoView();
}

function loggUt() {
    modell.app.logInId = null;
    visKonto();
}