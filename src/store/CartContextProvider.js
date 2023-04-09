import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + (action.item.price) * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => {
           return item.id === action.item.id;  
        });

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItem = {
                ...action
            }
            updatedItems = state.items.concat(action.item);

        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.id;  
        });
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return defaultCartState;  
};

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        });
    };

    const removeItemHanlder = id => {
        dispatchCartAction({
            type: 'REMOVE',
            id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHanlder
    };

    
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;