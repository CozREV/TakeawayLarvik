const modell = {
    app: {
        currentView: "home",
        logIn: false
    },

    viewstate: {
        cart: [],
        selectRestaurant: null,
        selectProduct: null,
        search: "",
        filter: {
            sort: null,
            maxPrice: null,
            allergyFilter: true
        },
        statFilter: "week",
        order: {
            time: null,
            comment: ""
        } 
    },

    data: {
        user: [{
                id: 1,
                name: "øyvind",
                email: "øy@vind.com",
                phoneNr: "123456789",
                role: "customer",
                allergiesId: [1, 3, 9],
                orderHistory: [],     
                rating: [],         
                stats: {
                    week: 0,
                    month: 0,
                    year: 0
                }
            }],
        restaurants: [{
                id: 1,
                Name: "",
                Logo: "",
                desc: "",
                offer: [],
                stats: {
                    salesByHour: {},
                    topProducts: {
                        week: [],
                        month: [],
                        year: []
                    }
                }
            }],
        products: [{
                id: 1,
                restaurantId: 1,
                title: "",
                desc: "",
                price: 149,
                picture: "",
                allergiesId: [], 
                ingredients: "",
                drinks: [{id: 1, name: "", price: null}],
                rating: [], 
                stats: {
                    week: 0,
                    month: 0,
                    year: 0
                }
            }],

        // EU allergy list
        allergies: [
            {id: 1, name: "nuts"},
            {id: 2, name: "glucose"},
            {id: 3, name: "lactose"},
            {id: 4, name: "egg"},
            {id: 5, name: "fish"},
            {id: 6, name: "shellfish"},
            {id: 7, name: "soya"},
            {id: 8, name: "wheat"},
            {id: 9, name: "celery"},
            {id: 10, name: "mustard"},
            {id: 11, name: "sesame seed"},
            {id: 12, name: "sulphur dioxide"},
            {id: 13, name: "lupin"},
            {id: 14, name: "molluscs"}
        ],
        orders: [{
                userId: 1,
                restaurantId: 1,
                orderNr: "",
                date: "26/03/2026",
                pickupTime: "12:30",
                completed: false,
                items: [
                    {
                        productId: 1,
                        quantity: 1,
                        comment: "",
                        drinkId: ""
                    }
                ],
                totalPrice: ""
            }],
        userRating: [{
                id: 1,
                userId: 1,
                productId: 1,
                score: 4,
                comment: "",
                date: "26/03/2026"
            }],
        paymentMethod: ["Visa", "Vipps", "Google Pay"]
    }
}



/* const modell = {
    app: {

    }, 
    viewstate: {
        cart: [],
        order: {
            time: null,
            date: null
        },

    },
    data: {
        allergies: [
            {id: 1, name: "nøtter"},
            {id: 2, name: "glucose"},
            {id: 3, name: "lactose"}
        ],
        orders: [{
            id: 0,
            orderNr: "", 
            date: "12:00",
            time: "08/12",
            completed: false
        }],
        products: [{
            pris: 20,
            id: 1,
            title: "bolle", 
            allergiesId: [2, 3],
            availability: 10,
            picture: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.ctOcDD6EJEnLoOdLJv0NOAHaE6%3Fpid%3DApi&sp=1773839254T6bf5ab0563659579f2b58fcb16ba7417f0aa74bd6009986c8c487846a4468a09'
           
        }]

    }
}

console.log(modell.data.products[0].picture) */