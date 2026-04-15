const modell = {
    app: {
        currentView: "Home",
        logInId: null
    },

    viewstate: {
        logIn: {
            username: null,
            password: null
        },
        createUser: {
            name: null,
            email: null,
            phoneNr: null,
            password: null,
            hasAdmin: null,
            allergiesId: []
        },
        createRestaurant: {
            id: null,
            restName: null,
            restLogo: null,
            desc: null,
            offers: [],
        },
        createProduct: {
            id: 1,
            restaurantId: 1,
            title: null,
            picture: null,
            price: 149,
            allergiesId: [],
            ingredients: "",
            addDrink: null,
        },
        newOrder: {
            userId: null,
            restaurantId: null,
            orderNr: null,
            date: null,
            pickupTime: null,
            completed: null,
            product: [],
            totalPrice: null
        },
        cart: [],
        cartProduct: {
            productId: null,
            quantity: null,
            comment: null,
            drinkId: []
        },
        selectRestaurant: null,
        selectProduct: null,
        searchBar: "",
        filter: {
            sort: null,
            maxPrice: null,
            discount: null,
            allergyFilter: true,
        },
        statsFilter: "week",
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
            password: "8972",
            hasAdmin: false,
            allergiesId: [1, 3, 5],
            stats: {
                week: 0,
                month: 0,
                year: 0
            },
            
            },
           { 
             id: 2,
             name: "Omar",
            email: "omar.ismail.no@gmail.com",
            phoneNr: "48428653",
            password: "omarboy84",
            hasAdmin: false,
            allergiesId: [],
           stats: {
             week: 3,
             month: 7,
             year: 8
           }
         },
        
        ], 


        restaurant: [{
            id: 1,
            restName: "",
            restLogo: "",
            desc: "",
            offers: [],
            stats: {
                SalesByHour: {},
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
            title: "Hamburger",
            picture: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWFiemx3OThmY29peWkzbzZncTE1dms1Zm5oZ2k3OTVqMnFodzFqbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dZRlFW1sbFEpG/giphy.gif",
            price: 149,
            allergiesId: [],
            ingredients: "",
            drinkId: [0],
            ratings: [],
            stats: {
                week: 0,
                month: 0,
                year: 0
            }

        }],
        drinks: [
            {id: 1, name: "Cola", price: 89},
            {id: 2, name: "Kola", price: 59},
            {id: 3, name: "Koola", price: 29}
        ],

        //EU allergy list EFSA
        allergies: [
                {id: 1, name: "Nuts"},
                {id: 2, name: "Glucose"},
                {id: 3, name: "Lactose"},
                {id: 4, name: "Egg"},
                {id: 5, name: "Fish"},
                {id: 6, name: "Crustaceans"},
                {id: 7, name: "Soy"},
                {id: 8, name: "Wheat"},
                {id: 9, name: "Celery"},
                {id: 10, name: "Mustard"},
                {id: 11, name: "Sesame seed"},
                {id: 12, name: "Sulphur dioxide"},
                {id: 13, name: "Lupin"},
                {id: 14, name: "Molluscs"}
        ],
        orders: [{
            userId: 1,
            restaurantId: 1,
            orderNr: "",
            date: "26/03/2026",
            pickupTime: "12.30",
            completed: false,
            product: [{
                productId: 1,
                quantity: 1,
                comment: "",
            }],
            totalPrice: ""
        }],
        userRatings: [{
            id: 1,
            userId: 1,
            productId: 1,
            score: 1,
            comment: "",
            date: "26/03/2026"
        }],
        paymentMethod: ["Visa", "Vipps", "Google Pay"]
    }
}






// BeckaBaguet shop kode

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