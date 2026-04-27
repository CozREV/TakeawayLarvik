function updateView(){
    let html = ''
    if(modell.app.currentView === "Home"){
        html = homeView();
    }
    else if(modell.app.currentView === "Account"){
        html = accountView();
    }
    else if(modell.app.currentView === "Company"){
        html = companyView();
    }
    else if(modell.app.currentView === "Cart"){
        html = cartView.render();
    }
    else if(modell.app.currentView === "Restaurant") {
        html = restaurantView()
    }
    else if(modell.app.currentView === "regRestaurant") {
        html = regRestaurantView()
    }
    else if(modell.app.currentView === "Betaling"){
        html = payView();
    }
    else if(modell.app.currentView === "Bekreftelse"){
        html = paymentConfirmedView();
}

    document.getElementById("main").innerHTML = html

    if (modell.app.currentView === "Home") {
        renderMeals()
    }
}

