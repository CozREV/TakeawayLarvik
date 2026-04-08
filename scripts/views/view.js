updateView()
function updateView(){
    let html = ''
    if(modell.app.currentView === "home"){
        html = homeView();
    }
    if else(modell.app.currentView === "resturant"){
        html = resturnatView();
    }
    document.getElementById("main").innerHTML = html;
}
