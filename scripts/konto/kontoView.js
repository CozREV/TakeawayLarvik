
function showAccount() {
    modell.app.currentView = "Account"
    updateView()
}

function accountView() {
     const user = modell.data.user.find(u => u.id === modell.app.logInId);

   
    return /*html*/ `
        <div class="header">
            <h1 class="logo-title">Takeaway Larvik</h1>
            <h1>Konto</h1>
            <button onclick="changeView('Home')">&#8592;</button>
        </div>

        <div class="avatar-box">
            <span class="avatar-icon">&#128100;</span>
        </div>

        <div class="account-content">
            ${user ? /*html*/ `
                <h2 class="username">${user.name}</h2>

                <details>
                    <summary>Allergener</summary>
                    <div class="allergy-list">
                        ${modell.data.allergies.map(a => `
                            <label>
                                <input type="checkbox"
                                    ${user.allergiesId.includes(a.id) ? "checked" : ""}
                                    onchange="updateAllergy(${a.id}, this.checked)">
                                ${a.name}
                            </label>
                        `).join("")}
                    </div>
                </details>

                <div class="statistic">
                    <div class="stats-header">
                        <p>Statistikk</p>
                        <button onclick="statsFilter('week')">Uke</button>
                        <button onclick="statsFilter('month')">Mnd</button>
                        <button onclick="statsFilter('year')">År</button>
                    </div>
                     <div class="stats-bars">
                     <div class="bar" style="height: ${user.stats.week * 10}px"></div>
                     <div class="bar" style="height: ${user.stats.month * 10}px"></div>
                    <div class="bar" style="height: ${user.stats.year * 10}px"></div>
                  </div>
                  
                </div>

                    <button onclick="logOut()">Logg ut</button>
                    ` : `
                    <p id="notLogIn">Du er ikke logget inn</p>
                    <button onclick="showLogIn()">Logg inn</button>
                    <button onclick="showRegister()">Registrer deg</button>
            `}
                </div>

        <div class="bottom-nav">
            <button onclick="changeView('Home')">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `;
}
    


function logInView() {
    return /*html*/ `
           <h1 class="logo-title">Takeaway Larvik</h1>
        <div class="header">
            <button onclick="showAccount()">&#8592;</button>
            <h1>Logg inn</h1>
        </div>

        <div class="account-content">
            <input 
                type="text" 
                placeholder="Email"
                oninput="modell.viewstate.logIn.username = this.value">
            <input 
                type="password" 
                placeholder="Passord"
                oninput="modell.viewstate.logIn.password = this.value">
            <button id="btn-logIn" onclick="logIn()">Logg inn</button>
        </div>

        <div class="bottom-nav">
            <button onclick="showMainSite()">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `;
}

function registerView() {
    return /*html*/ `
        <h1 class="logo-title">Takeaway Larvik</h1>
        <div class="header">
            <button onclick="showAccount()">&#8592;</button>
            <h1>Registrer deg</h1>
        </div>

        <div class="account-content">
            <input
                type="text"
                placeholder="Navn"
                oninput="modell.viewstate.createUser.name = this.value"
                required>
            <input
                type="email"
                placeholder="Email"
                oninput="modell.viewstate.createUser.email = this.value"
                required>
            <input
                type="number"
                placeholder="Telefonnummer"
                oninput="modell.viewstate.createUser.phoneNr = this.value"
                required>
            <input
                type="password"
                placeholder="Passord"
                oninput="modell.viewstate.createUser.password = this.value"
                required>

            <div class="account-type">
                <label>
                    <input class=".inp-mid" type="radio" name="accountType" value="customer"
                        onchange="modell.viewstate.createUser.isCompany = false"
                        checked>
                    Kunde
                </label>
                <label>
                    <input class=".inp-mid" type="radio" name="accountType" value="company"
                        onchange="modell.viewstate.createUser.isCompany = true">
                    Bedrift
                </label>
            </div>

            <button onclick="registerUser()">Registrer deg</button>
        </div>

        <div class="bottom-nav">
            <button onclick="showMainSite()">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `;
}

         //admin konto admin konto admin konto//

function companyView() {
    const user = modell.data.user.find(u => u.id === modell.app.logInId);
    
    return /*html*/ `
    <div class="header">
            <h1 class="logo-title">Takeaway Larvik</h1>
            <h1>Konto</h1>
            <button onclick="changeView('Home')">&#8592;</button>
            <h1>${user.name}</h1>
    </div>

        <div class="account-content">
            <div class="company-nav">
                <button onclick="showAddFood()">🍕 Legg til mat</button>
                <button onclick="showRestaurantControl()">🏪 Restaurant</button>
            </div>

            <button onclick="logOut()">Logg ut</button>
        </div>

        <div class="bottom-nav">
            <button onclick="showMainSite()">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `;
}