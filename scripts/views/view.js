
function updateView(){
    let html = ''
    if(modell.app.currentView === "Home"){
        html = homeView();
    }
    else if(modell.app.currentView === "restaurant"){
        html = restaurantView();
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

    document.getElementById("main").innerHTML = html

    if (modell.app.currentView === "Home") {
        renderMeals()
    }
}
