
function updateView(){
    let html = ''
    if(modell.app.currentView === "Home"){
        html = homeView();
    }
    else if(modell.app.currentView === "restaurant"){
        html = restaurantView();
    }
    else if(modell.app.currentView === "Konto"){
        html = accountView();
    }
    else if(modell.app.currentView === "Bedrift"){
        html = bedriftView();
    }
    else if(modell.app.currentView === "Cart"){
        html = cartView.render();
    }

    document.getElementById("main").innerHTML = html

    if (modell.app.currentView === "Home") {
        renderMeals()
    }
}
