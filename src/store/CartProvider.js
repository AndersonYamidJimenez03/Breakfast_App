import CartContext from './CartStore';
import { useReducer } from 'react';

//we use useReducer insted of useState because we need to check 
// if the item already exist

const defaultCartState = {
    items: [],
    totalAmount:0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartitemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCartitemIndex];
        let updatedItem;
        let updatedItems;

        if(existingCartItem){
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartitemIndex] = updatedItem;
        }else {
            updatedItem = {...action.item}; // se puede eliminar para quedar mas limpio
            updatedItems = state.items.concat(updatedItem);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    };

    const removeItemCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        remoteItem: removeItemCartHandler
    };

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;