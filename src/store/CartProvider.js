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
            totalAmount: updatedTotalAmount,
          };
    }
    

    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
    }
    
    return defaultCartState;
};

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
        removeItem: removeItemCartHandler
    };

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;