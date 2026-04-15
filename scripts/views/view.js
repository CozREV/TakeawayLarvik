
function updateView(){
    let html = ''
    if(modell.app.currentView === "Home"){
        html = homeView();
    }
    else if(modell.app.currentView === "restaurant"){
        html = restaurnatView();
    }
    else if(modell.app.currentView === "Konto"){
        html = kontoView();
    }
    else if(modell.app.currentView === "Cart"){
        html = cartView.render();
    }
    document.getElementById("main").innerHTML = html;
    renderMeals()
}

