
function visKonto() {
    modell.app.currentView = "Konto"
    updateView()
}

function kontoView() {
     const bruker = modell.data.user.find(u => u.id === modell.app.logInId);

   
    return `
        <div class="header">
            <h1 class="logo-tittel">Takeaway Larvik</h1>
            <h1>Konto</h1>
            <button onclick="EndreView('Home')">&#8592;</button>
        </div>

        <div class="avatar-boks">
            <span class="avatar-ikon">&#128100;</span>
        </div>

        <div class="konto-innhold">
            ${bruker ? `
                <h2>${bruker.name}</h2>

                <details>
                    <summary>Allergener</summary>
                    <div class="allergen-liste">
                        ${modell.data.allergies.map(a => `
                            <label>
                                <input type="checkbox"
                                    ${bruker.allergiesId.includes(a.id) ? "checked" : ""}
                                    onchange="oppdaterAllergi(${a.id}, this.checked)">
                                ${a.name}
                            </label>
                        `).join("")}
                    </div>
                </details>

                <div class="statistikk">
                    <div class="stats-header">
                        <p>Statistikk</p>
                        <button onclick="statsFilter('week')">Uke</button>
                        <button onclick="statsFilter('month')">Mnd</button>
                        <button onclick="statsFilter('year')">År</button>
                    </div>
                     <div class="stats-bars">
                     <div class="bar" style="height: ${bruker.stats.week * 10}px"></div>
                     <div class="bar" style="height: ${bruker.stats.month * 10}px"></div>
                    <div class="bar" style="height: ${bruker.stats.year * 10}px"></div>
                  </div>
                  
                </div>

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
            <button onclick="visKonto()">Konto</button>
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