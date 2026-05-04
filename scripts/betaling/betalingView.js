
  updateView()
function payView() {
    const total = modell.viewstate.cart.reduce((sum, item) => {
        const product = modell.data.products.find(p => p.id === item.productId);
        return sum + (product.price * item.quantity);
    }, 0);

    return /*html*/ `
        <h1 class="logo-title">Takeaway Larvik</h1>
        <div class="header">
            <button onclick="showCart()">&#8592;</button>
            <h1>Betaling</h1>
        </div>

        <div class="payment-content">
            <div class="payment-methods">
                <label>
                    <input type="radio" name="betaling" value="visa">
                    Visa
                </label>
                <label>
                    <input type="radio" name="betaling" value="vipps">
                    Vipps
                </label>
                <label>
                    <input type="radio" name="betaling" value="googlepay">
                    Google Pay
                </label>
                <label>
                    <input type="radio" name="betaling" value="applepay">
                    Apple Pay
                </label>
            </div>

            <h2>Totalt: ${total} kr</h2>

            <button onclick="betalingController.confirmPayment()">
                Betal
            </button>
        </div>

        <div class="bottom-nav">
            <button onclick="changeView('Home')">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `;
}



function paymentConfirmedView() {
    const kode = "#" + Math.random().toString(36).substring(2, 9).toUpperCase();
    
    return /*html*/ `
        <h1 class="logo-title">Takeaway Larvik</h1>

        <div class="payment-confirmation">
            <h2>Betalings bekreftelse</h2>
            <p>Betaling er gjennomført</p>
            <div class="checkmark">✅</div>
            <p class="code">Kode: ${kode}</p>
        </div>

        <div class="bottom-nav">
            <button onclick="changeView('Home')">Finn rett</button>
            <button onclick="showCart()">Handlekurv</button>
            <button onclick="showAccount()">Konto</button>
        </div>
    `;
}
    updateView()
