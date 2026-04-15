
function visHandlekurv() {
    modell.app.currentView = "Cart"
    updateView()
}

const cartView = {
    render() {
        const total = modell.viewstate.cart.reduce((sum, item) => {
            const produkt = modell.data.products.find(p => p.id === item.productId)
            return sum + (produkt.price * item.quantity)
        }, 0)
        
        return `
            <div id="cart-wrapper">
                <div id="cart-header">
                    <button onclick="EndreView('Home')">←</button>
                    <h2>Handlekurv</h2>
                </div>

                <div id="cart-liste">
                    ${modell.viewstate.cart.map((item, index) => {
                        const produkt = modell.data.products.find(p => p.id === item.productId)
                        return `
                            <div class="cart-item">
                                <span class="cart-nummer">${index + 1}</span>
                                <div class="cart-info">
                                    <p class="cart-restaurant">Restaurant navn</p>
                                    <p class="cart-tittel">${produkt.title}</p>
                                    <p class="cart-innhold">${produkt.ingredients}</p>
                                    <button class="btn-click" onclick="cartController.fjernVare(${index})">Fjern</button>
                                </div>
                                <img class="cart-bilde" src="${produkt.picture}" />
                            </div>
                        `
                    }).join("")}
                </div>

                <p id="cart-total">Totalt: ${total} kr</p>

                <div id="cart-bunn">
                    <button id="btn-mer"> Legg til mer</button>
                    <button id="btn-betal"> Gå til betaling</button>
                 </div>
            </div>
        `
    }
}