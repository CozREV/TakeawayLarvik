function showAccount() {
    const user = modell.data.user.find(u => u.id === modell.app.logInId);
    
    if (user && user.isCompany) {
        modell.app.currentView = "Company";
    } else {
        modell.app.currentView = "Account";
    }
    updateView();
}

function logOut() {
    modell.app.logInId = null;
    changeView('Home');
}

function showLogIn() {
    document.getElementById("main").innerHTML = logInView();
}

function logIn() {
    const user = modell.data.user.find(u => 
        u.email === modell.viewstate.logIn.username && 
        u.password === modell.viewstate.logIn.password
    );

    if (user) {
        modell.app.logInId = user.id;
        showAccount();
    } else {
        alert("Feil email eller passord!");
    }
}

function showRegister() {
    document.getElementById("main").innerHTML = registerView();
}

function registerUser() {
    const newUser = modell.viewstate.createUser;
    const user = {
        id: modell.data.user.length + 1,
        name: newUser.name,
        email: newUser.email,
        phoneNr: newUser.phoneNr,
        password: newUser.password,
        hasAdmin: false,
        allergiesId: [],
        isCompany: newUser.isCompany || false,
        stats: {
            week: 0,
            month: 0,
            year: 0
        }
    };
    modell.data.user.push(user);
    modell.app.logInId = user.id;
    showAccount();
}

function updateAllergy(id, checked) {
    const user = modell.data.user.find(u => u.id === modell.app.logInId);
     if (checked) {
        user.allergiesId.push(id);
    } else {
        user.allergiesId = user.allergiesId.filter(a => a !== id);
    }
}

function statsFilter(filter) {
    modell.viewstate.statsFilter = filter;
    showAccount();
}