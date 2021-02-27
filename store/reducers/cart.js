import ADD_TO_CART from '../actions/actionCart';
import CartItem from '../../models/Cart-Item';

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action) {
        case ADD_TO_CART:
            const addedProdct = action.product;
            const prodPrice = addedProdct.price;
            const prodTitle = addedProdct.title;
            
            if (state.items[addedProdct.id]) {
                const updatedItem = new CartItem(
                    state.items[addedProdct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProdct.id].sum+prodPrice
                );
                return {
                    ...state,
                    items: { ...state.items, [addedProdct.id]: updatedItem },
                    totalAmount:state.totalAmount+prodPrice
                }

            } else {
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state,
                    items: { ...state.items, [addedProdct.id]: newCartItem },
                    totalAmount: state.totalAmount + prodPrice
                }
            }
    }
    return state;
}