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

function addFood() {
    const newFood = modell.viewstate.createProduct;
    const restaurant = modell.data.restaurant.find(r => r.userId === modell.app.logInId);
    
    const product = {
        id: modell.data.products.length + 1,
        restaurantId: restaurant.id,
        title: newFood.title,
        picture: newFood.picture,
        price: newFood.price,
        ingredients: newFood.ingredients,
        allergiesId: []
    };
    
    modell.data.products.push(product);
    changeView("Restaurant");
}

function showAddFood() {
    modell.app.currentView = "LeggTilMat";
    updateView();
}