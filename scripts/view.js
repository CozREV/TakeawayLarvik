updateView()
function updateView(){
    let html = ''
    if(modell.app.currentView === "homepppage"){
        html = homepage()
    }
    document.getElementById("main").innerHTML = html
}


function homeView(){
    return /*html*/ `
    <div>larvik takeawayyyy<div>
    `
}