
function restaurnatView(){
    const restur = modell.data.restaurant.find(r => r.id === 1)
    return /*html*/`
    ${modell.data.restaurant.restur}
    `
}