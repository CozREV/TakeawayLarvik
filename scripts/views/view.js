
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

    document.getElementById("main").innerHTML = html

    if (modell.app.currentView === "Home") {
        renderMeals()
    }
}
