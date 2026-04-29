function homeView(){
    return /*html*/ `    
        <div class="header">
            <div class="header-snd">
                <h1 id="main-title">Takeaway Larvik</h1>
                <button onclick="toggleDarkMode()">🌙</button>
            </div>
            <input id="search-txt"  oninput="modell.viewstate.searchBar = this.value ; filterMeals()" 
                placeholder="🔎 Søk etter restauranter, retter, hovedingredienser">
            <div id="search-popup"></div>
        </div>
        <nav id="main-menu">
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
        </nav>
    `;
}

function renderMeals() {
    const meals = modell.data.products

    const html = meals.map(m => `
        <div class="meal-card">
            <img src="${m.picture}">
            <div class="meal-card-bottom">
                <p>${m.title}</p>
                <button onclick="cartController.addToCart(${m.id})">Bestill</button>
            </div>
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
    const search = modell.viewstate.searchBar
    
    let products = modell.data.products
    let restaurants = modell.data.restaurant

    if (user && modell.viewstate.filter.allergyFilter) {
        products = products.filter(p => !p.allergiesId.some(a => user.allergiesId.includes(a)))
    }

    if (search) {
        products = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        restaurants = restaurants.filter(r => r.restName.toLowerCase().includes(search.toLocaleLowerCase()))
    } else {
        document.getElementById("search-popup").innerHTML = ""
        return
    }


    const popupHtml = restaurants.map(r => `
            <div class="popup-item">
                <p>${r.restName}</p>
            </div>
        `).join("")

    const html = products.map(m => `
        <div class="meal-card">
            <img src="${m.picture}">
            <div class="meal-card-bottom">
                <p>${m.title}</p>
                <button onclick="cartController.addToCart(${m.id})">Bestill</button>
            </div>
        </div>  
    `).join("")

    document.getElementById("meals").innerHTML = html
    document.getElementById("daily").innerHTML = html
    document.getElementById("search-popup").innerHTML = popupHtml
}

function toggleDarkMode() {
    document.body.classList.toggle("dark")
}


updateView()

