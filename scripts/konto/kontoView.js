
 updateView()
function kontoView() {
     const bruker = modell.data.user.find(u => u.id === modell.app.logInId);

    return  `
        <div class="header">
        <h1>Takeaway Larvik</h1>
        <h1>Konto</h1>
        <button onclick="visHovedside()"></button>
        
        </div>

        <div class="konto-innhold">
            ${bruker ? `
                <div class="avatar">👤</div>
                <h2>${bruker.name}</h2>
                <p>${bruker.email}</p>
                <p> ${bruker.phoneNr}</p>
                <button onclick="loggUt()">Logg ut</button>
            ` : `
                <div class="avatar">👤</div>
                <p>Du er ikke logget inn</p>
                <button onclick="visLoggInn()">Logg inn</button>
                <button onclick="visRegistrer()">Registrer deg</button>
            `}
        </div>

        <div class="bunn-nav">
            <button onclick="visHovedside()">Finn rett</button>
            <button onclick="visHandlekurv()">Handlekurv</button>
            <button onclick="visKonto()">Konto</button>
        </div>
    `;
    updateView()
}

