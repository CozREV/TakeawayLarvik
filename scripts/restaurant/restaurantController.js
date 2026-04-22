function registerRestaurant() {
    const newRest = modell.viewstate.createRestaurant
    const rest = {
        id: modell.data.restaurant.length + 1,
        userId: modell.app.logInId,
        restName: newRest.restName,
        restLogo: newRest.restLogo,
        desc: newRest.desc,
        offers: []
    };
    modell.data.restaurant.push(rest)
    changeView("Restaurant")
}