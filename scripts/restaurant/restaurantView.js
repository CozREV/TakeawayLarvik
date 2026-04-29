function showRestaurantControl() {
    const restaurant = modell.data.restaurant.find(r => r.userId === modell.app.logInId)

    if (restaurant) {
        modell.app.currentView = "Restaurant"
        updateView()
    } else {
        modell.app.currentView = "regRestaurant"
        updateView()
    }
}

function restaurantView() {
    const restaurant = modell.data.restaurant.find(r => r.userId === modell.app.logInId)

    return /*html*/ `
        <div class="header">
            <h1 class="logo-title">Takeaway Larvik</h1>
            <h1>Restaurant</h1>
            <button onclick="changeView('Home')">&#8592;</button>
        </div>

        <div class="restaurant-content">
            <img src="${restaurant.restLogo}" 
                alt="Restaurant logo"
                style="width: 100px; height: 100px; border-radius: 50%">
            <h2>${restaurant.restName}</h2>
            <p>${restaurant.desc}</p>
        </div>

        <div class="bottom-nav">
            <button onclick="changeView('Home')">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `
}

function regRestaurantView() {
    return /*html*/ `
        <div class="header">
            <h1 class="logo-title">Takeaway Larvik</h1>
            <h1>Restaurant</h1>
            <button onclick="changeView('Home')">&#8592;</button>
        </div>

        <div class="restaurant-content">
            <input
                type="text"
                placeholder="Restaurant Logo"
                oninput="modell.viewstate.createRestaurant.restLogo = this.value"
                required>
            <input
                type="text"
                placeholder="Restaurant Navn"
                oninput="modell.viewstate.createRestaurant.restName = this.value"
                required>
            <input
                type="text"
                placeholder="Restaurant Beskrivelse"
                oninput="modell.viewstate.createRestaurant.desc = this.value"
                required>
            <button onclick="registerRestaurant()">Opprett Restaurant</button>
        </div>

        <div class="bottom-nav">
            <button onclick="changeView('Home')">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `
}
function addFoodView() {
    return /*html*/ `
        <h1 class="logo-title">Takeaway Larvik</h1>
        <div class="header">
            <button onclick="showRestaurantControl()">&#8592;</button>
            <h1>Legg til mat</h1>
        </div>

        <div class="restaurant-content">
            <input type="text" placeholder="Matnavn"
                oninput="modell.viewstate.createProduct.title = this.value">
            <input type="text" placeholder="Bilde URL"
                oninput="modell.viewstate.createProduct.picture = this.value">
            <input type="number" placeholder="Pris"
                oninput="modell.viewstate.createProduct.price = this.value">
            <input type="text" placeholder="Ingredienser"
                oninput="modell.viewstate.createProduct.ingredients = this.value">

            <button onclick="addFood()">Legg til</button>
        </div>

        <div class="bottom-nav">
            <button onclick="changeView('Home')">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `
}