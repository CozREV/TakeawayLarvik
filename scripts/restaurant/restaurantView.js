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
            <h2>${restaurant.restName}</h2>
            <p>${restaurant.desc}</p>
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
                oninput="modell.viewstate.createRestaurant.restLogo = this.value">
            <input
                type="text"
                placeholder="Restaurant Navn"
                oninput="modell.viewstate.createRestaurant.restName = this.value">
            <input
                type="text"
                placeholder="Restaurant Beskrivelse"
                oninput="modell.viewstate.createRestaurant.desc = this.value">
            <button onclick="registerRestaurant()">Opprett Restaurant</button>
        </div>

        <div>
        </div>
    `
}

