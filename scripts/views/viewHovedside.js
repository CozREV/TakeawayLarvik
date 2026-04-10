

updateView()


function homeView(){
return /*html*/  `    <div class="header">
            <h1>Takeaway Larvik</h1>
            <input placeholder="søk etter restauranter, retter, hovedingredienser">
        </div>
        <div class="seksjon">
            <h2>Dine måltider:</h2>
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
            <button>Handlekurv</button>
            <button onclick="EndreView('Konto')">Konto</button>
            <button>
        </div>
    `;
    
}
    
updateView()

