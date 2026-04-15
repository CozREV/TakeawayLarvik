function homeView(){
return /*html*/  `    <div class="header">
            <h1 id="main-title">Takeaway Larvik</h1>
            <input id="search-txt"placeholder="🔎 søk etter restauranter, retter, hovedingredienser">
        </div>
        <div class="seksjon">
            <h2>Dine maltider:</h2>
            <p>Det du bestiller oftest</p>
            <div id="maltider"></div>
        </div>
        <div class="seksjon">
            <h2>Dagens:</h2>
            <p>Tilbud og nyheter fra forskjellige restauranter i Larvik</p>
            <div id="dagens"></div>
        </div>
        <div id="filter-panel"></div>
        <div class="bunn-nav">
            <button onclick="toggleFilter()">Filter</button>
            <button onclick="visHandlekurv()">Handlekurv</button>
            <button onclick="visKonto()">Konto</button>
        </div>
    `;
    
}

function renderMeals() {
    const meals = modell.data.products

    const html = meals.map(m => `
        <div class="meal-card">
            <img src="${m.picture}">
            <p>${m.title}</p>
        </div>
    `).join("")

    document.getElementById("maltider").innerHTML = html
    document.getElementById("dagens").innerHTML = html
}

function toggleFilter() {
    const panel = document.getElementById("filter-panel")

    if (panel.innerHTML !== "") {
        panel.innerHTML = ""
        return
    }

    panel.innerHTML = `
        <div class="filter-boks">
            <label>
                <input type="checkbox"
                    ${modell.viewstate.filter.allergyFilter ? "checked" : ""}
                    onchange="modell.viewstate.filter.allergyFilter = this.checked; filterMeals()">
                Skjul mine allergener
            </label>
        </div>
    `
}

function filterMeals() {
    const bruker = modell.data.user.find(u => u.id === modell.app.logInId)
    let produkter = modell.data.products

    if (bruker && modell.viewstate.filter.allergyFilter) {
        produkter = produkter.filter(p => !p.allergiesId.some(a => bruker.allergiesId.includes(a)))
    }

    const html = produkter.map(m => `
        <div class="meal-card">
            <img src="${m.picture}">
            <p>${m.title}</p>
        </div>
    `).join("")

    document.getElementById("maltider").innerHTML = html
    document.getElementById("dagens").innerHTML = html
}


updateView()

