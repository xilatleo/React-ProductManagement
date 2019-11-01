var initialState = [
    {
        id: 1,
        name: "Iphone 6 plus",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Iphone 7 plus",
        price: 500,
        status: false
    },
    {
        id: 3,
        name: "Oppo x1",
        price: 450,
        status: true
    }

]

const products = (state = initialState,action) => {
    switch(action.type){
        

        default: return [...state]
    }
}

export default products