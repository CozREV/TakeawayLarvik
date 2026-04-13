

function visKonto(){
    modell.app.currentView = "konto";
    document.getElementById("main").innerHTML = kontoView();

}

function loggUt() {
    modell.app.logInId = null;
    EndreView('Home');
}

function visLoggInn() {
    document.getElementById("main").innerHTML = loggInnView();
}

function loggInn() {
    const bruker = modell.data.user.find(u => 
        u.email === modell.viewstate.logIn.username && 
        u.password === modell.viewstate.logIn.password
    );

    if (bruker) {
        modell.app.logInId = bruker.id;
        visKonto();
    } else {
        alert("Feil email eller passord!");
    }
}

function visRegistrer() {
    document.getElementById("main").innerHTML = registrerView();
}

function registrerBruker() {
    const ny = modell.viewstate.createUser;
    const bruker = {
        id: modell.data.user.length + 1,
        name: ny.name,
        email: ny.email,
        phoneNr: ny.phoneNr,
        password: ny.password,
        hasAdmin: false,
        allergiesId: []
    };
    modell.data.user.push(bruker);
    modell.app.logInId = bruker.id;
    visKonto();
}

function oppdaterAllergi(id, checked) {
    const bruker = modell.data.user.find(u => u.id === modell.app.logInId);
     if (checked) {
        bruker.allergiesId.push(id);
    } else {
        bruker.allergiesId = bruker.allergiesId.filter(a => a !== id);
    }
}

function statsFilter(filter) {
    modell.viewstate.statsFilter = filter;
    visKonto();
}
