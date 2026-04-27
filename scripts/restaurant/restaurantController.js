function registerRestaurant() {
    const newRest = modell.viewstate.createRestaurant
    const rest = {
        id: modell.data.restaurant.length + 1,
        userId: modell.app.logInId,
        restName: newRest.restName,
        restLogo: newRest.restLogo,
        desc: newRest.desc,
        offers: []
    };
    modell.data.restaurant.push(rest)
    changeView("Restaurant")
}

function leggTilMat() {
    const newMat = modell.viewstate.createProduct;
    const restaurant = modell.data.restaurant.find(r => r.userId === modell.app.logInId);
    
    const produkt = {
        id: modell.data.products.length + 1,
        restaurantId: restaurant.id,
        title: newMat.title,
        picture: newMat.picture,
        price: newMat.price,
        ingredients: newMat.ingredients,
        allergiesId: []
    };
    
    modell.data.products.push(produkt);
    changeView("Restaurant");
}

function showLeggTilMat() {
    modell.app.currentView = "LeggTilMat";
    updateView();
}