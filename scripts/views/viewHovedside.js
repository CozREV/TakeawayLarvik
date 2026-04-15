function homeView(){
return /*html*/  `    <div class="header">
            <h1 id="main-title">Takeaway Larvik</h1>
            <input placeholder="søk etter restauranter, retter, hovedingredienser">
        </div>
        <div class="seksjon">
            <h2>Dine maltider:</h2>
            <p>Det du bestiller oftest</p>
            <div id="maltider"></div>
        </div>
        <div class="seksjon">
            <h2>Dagens:</h2>
            <p>Tilbud og nyheter fra forskjellige restauranter i Larvik</p>
            <div id="dagens"></div>
        </div>
        <div class="bunn-nav">
            <button>Filter</button>
            <button onclick="visHandlekurv()">Handlekurv</button>
            <button onclick="visKonto()">Konto</button>
        </div>
    `;
    
}

function renderMeals() {
    const meals = modell.data.products

    const html = meals.map(m => `
        <div class="meal-card">
            <img src="${m.picture}">
            <p>${m.title}</p>
        </div>
    `).join("")

    document.getElementById("maltider").innerHTML = html
    document.getElementById("dagens").innerHTML = html
}

updateView()

