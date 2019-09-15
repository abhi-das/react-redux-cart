import ActionType from '../actions/actionType';

const initialState = {
    items: [
        {
            id: 1, title: "Rob", desc: "Dolore magna ea do quis quis eiusmod consequat.", quantity: 0, price: 50
        },
        {
            id: 2, title: "Hanna", desc: "Esse dolor sit exercitation occaecat.", quantity: 0, price: 70
        },
        {
            id: 3, title: "Michale", desc: "Dolor consequat elit in irure officia quis reprehenderit labore consectetur adipisicing fugiat officia aliquip.", quantity: 0, price: 45
        },
        {
            id: 4, title: "Mike", desc: "Magna occaecat duis qui laboris velit cupidatat ea consectetur dolor aliqua duis.", quantity: 0, price: 95
        }
    ],
    addItems: [],
    total: 0
}

const CartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.addToCart:

            const prod = state.items.find(prod => prod.id === action.id);

            const existingProd = state.addItems.find(existProd => action.id === existProd.id);

            const newTotal = state.total + prod.price;

            if (existingProd) {
                prod.quantity += 1;

                return {
                    ...state,
                    total: newTotal
                }

            } else {
                prod.quantity = 1;
                return {
                    ...state,
                    total: newTotal
                }
            }

        default:
            return state;
    }
}

export default CartReducer;