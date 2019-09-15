import ActionType from './actionType';

const AddToCart = (id) => {
    return {
        type: ActionType.addToCart,
        id: id
    }
}

export default AddToCart;