function homeView(){
    return /*html*/ `    
        <div class="header">
            <h1 id="main-title">Takeaway Larvik</h1>
            <input id="search-txt" placeholder="🔎 Søk etter restauranter, retter, hovedingredienser">
        </div>
        <div class="section">
            <h2>Dine måltider:</h2>
            <p>Det du bestiller oftest</p>
            <div id="meals"></div>
        </div>
        <div class="section">
            <h2>Dagens:</h2>
            <p>Tilbud og nyheter fra forskjellige restauranter i Larvik</p>
            <div id="daily"></div>
        </div>
        <div id="filter-panel"></div>
        <div class="bottom-nav">
            <button onclick="toggleFilter()">Filter</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
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

    document.getElementById("meals").innerHTML = html
    document.getElementById("daily").innerHTML = html
}

function toggleFilter() {
    const panel = document.getElementById("filter-panel")

    if (panel.innerHTML !== "") {
        panel.innerHTML = ""
        return
    }

    panel.innerHTML = `
        <div class="filter-box">
            <label>
                <input type="checkbox"
                    ${modell.viewstate.filter.allergyFilter ? "unchecked" : ""}
                    onchange="modell.viewstate.filter.allergyFilter = this.checked; filterMeals()">
                Skjul mine allergener
            </label>
        </div>
    `
}

function filterMeals() {
    const user = modell.data.user.find(u => u.id === modell.app.logInId)
    let products = modell.data.products

    if (user && modell.viewstate.filter.allergyFilter) {
        products = products.filter(p => !p.allergiesId.some(a => user.allergiesId.includes(a)))
    }

    const html = products.map(m => `
        <div class="meal-card">
            <img src="${m.picture}">
            <p>${m.title}</p>
        </div>
    `).join("")

    document.getElementById("meals").innerHTML = html
    document.getElementById("daily").innerHTML = html
}


updateView()

