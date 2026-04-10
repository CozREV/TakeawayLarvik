
function updateView(){
    let html = ''
    if(modell.app.currentView === "Home"){
        html = homeView();
    }
    else if(modell.app.currentView === "resturant"){
        html = resturnatView();
    }
    document.getElementById("main").innerHTML = html;
}

