import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [isButtonIsAnimeted, setIsButtonIsAnimeted] = useState(false);
  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;   
  },  
  0);

  const buttonClasses = ` ${styles.button} ${isButtonIsAnimeted? styles.bump: ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonIsAnimeted(true);
    
    const timer = setTimeout(()=> {
      setIsButtonIsAnimeted(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>
            Корзина
        </span>
        <span className={styles.badge}>
          {cartItemsNumber}
        </span>
    </button>
  )
}

export default HeaderCartButton;