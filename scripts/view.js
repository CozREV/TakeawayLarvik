updateView()
function updateView(){
    let html = ''
    if(modell.app.currentView === "homepppage"){
        html = homepage()
    }
    document.getElementById("app").innerHTML = html
}


function homeView(){
    return /*html*/ `
    <div>larvik takeawayyyy<div>
    `
}