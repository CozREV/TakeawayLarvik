
function showCart() {
    modell.app.currentView = "Cart"
    updateView()
}

const cartView = {
    render() {
        const total = modell.viewstate.cart.reduce((sum, item) => {
            const product = modell.data.products.find(p => p.id === item.productId)
            return sum + (product.price * item.quantity)
        }, 0)
        
        return /*html*/ `
            <div id="cart-wrapper">
                <div id="cart-header">
                    <button onclick="changeView('Home')">←</button>
                    <h2>Handlekurv</h2>
                </div>

                <div id="cart-list">
                    ${modell.viewstate.cart.map((item, index) => {
                        const product = modell.data.products.find(p => p.id === item.productId)
                        return `
                            <div class="cart-item">
                                <span class="cart-number">${index + 1}</span>
                                <div class="cart-info">
                                    <p class="cart-restaurant">Restaurant navn</p>
                                    <p class="cart-title">${product.title}</p>
                                    <p class="cart-content">${product.ingredients}</p>
                                    <button class="btn-click" onclick="cartController.removeProduct(${index})">Fjern</button>
                                </div>
                                <img class="cart-picture" src="${product.picture}" />
                            </div>
                        `
                    }).join("")}
                </div>

                <p id="cart-total">Totalt: ${total} kr</p>

                <div id="cart-bottom">
                    <button id="btn-more"> Legg til mer</button>
                   <button id="btn-pay" onclick="gåTilBetaling()">Gå til betaling</button>
                 </div>
            </div>
        `
    }
}