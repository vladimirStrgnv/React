import React from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{id:1,name:'33',amount:1, price:1}].map((item) => (
                <li key={Math.random()}>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>49</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
                <button className={styles.button}>Заказать</button>
            </div>
        </Modal>
    )
}

export default Cart;