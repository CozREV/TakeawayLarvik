updateView()
function updateView(){
    let html = ''
    if(modell.app.currentView === "home"){
        html = homeView();
    }
    document.getElementById("main").innerHTML = html;
}


function homeView(){
    return /*html*/ `
    <div>larvik takeawayyyy<div>
    `
}