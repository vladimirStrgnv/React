import CartContext from "./cart-context";

const CartContextProvider = (props) => {

    const addItemHandler = item => {};

    const removeItemHanlder = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
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