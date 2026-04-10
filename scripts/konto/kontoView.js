
 updateView()
function kontoView() {
     const bruker = modell.data.user.find(u => u.id === modell.app.logInId);

    return  `
        <div class="header">
        <h1>Takeaway Larvik</h1>
        <h1>Konto</h1>
        <button onclick="visHovedside()"></button>
        
        </div>

        <div class="avatar-boks">
        <span class="avatar-ikon">👤</span>
        </div>

       

        <div class="konto-innhold">
            ${bruker ? `
                
                <div class="avatar">👤</div>
                <h2>${bruker.name}</h2>
                <p>${bruker.email}</p>
                <p> ${bruker.phoneNr}</p>
                <button onclick="loggUt()">Logg ut</button>
            ` : `
                
                <p>Du er ikke logget inn</p>
                <button onclick="visLoggInn()">Logg inn</button>
                <button onclick="visRegistrer()">Registrer deg</button>
            `}
        </div>

        <div class="bunn-nav">
            <button onclick="EndreView('Home')">Finn rett</button>
            <button onclick="visHandlekurv()">Handlekurv</button>
            <button onclick="EndreView('Home')">Logg Ut</button>
        </div>
    `;
    
}

function loggInnView() {
    return /*html*/ `
           <h1 class="logo-tittel">Takeaway Larvik</h1>
        <div class="header">
            <button onclick="visKonto()">&#8592;</button>
            <h1>Logg inn</h1>
        </div>

        <div class="konto-innhold">
            <input 
                type="text" 
                placeholder="Email"
                oninput="modell.viewstate.logIn.username = this.value">
            <input 
                type="password" 
                placeholder="Passord"
                oninput="modell.viewstate.logIn.password = this.value">
            <button onclick="loggInn()">Logg inn</button>
        </div>

        <div class="bunn-nav">
            <button onclick="visHovedside()">Finn rett</button>
            <button onclick="visHandlekurv()">Handlekurv</button>
            <button onclick="visKonto()">Konto</button>
        </div>
    `;
}

function registrerView() {
    return /*html*/ `
       <h1 class="logo-tittel">Takeaway Larvik</h1>
        <div class="header">
            <button onclick="visKonto()">&#8592;</button>
            <h1>Registrer deg</h1>
        </div>

        <div class="konto-innhold">
            <input 
                type="text" 
                placeholder="Navn"
                oninput="modell.viewstate.createUser.name = this.value">
            <input 
                type="email" 
                placeholder="Email"
                oninput="modell.viewstate.createUser.email = this.value">
            <input 
                type="tel" 
                placeholder="Telefonnummer"
                oninput="modell.viewstate.createUser.phoneNr = this.value">
            <input 
                type="password" 
                placeholder="Passord"
                oninput="modell.viewstate.createUser.password = this.value">
            <button onclick="registrerBruker()">Registrer deg</button>
        </div>

        <div class="bunn-nav">
            <button onclick="visHovedside()">Finn rett</button>
            <button onclick="visHandlekurv()">Handlekurv</button>
            <button onclick="visKonto()">Konto</button>
        </div>
    `;
}