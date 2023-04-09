import React from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useState } from 'react';

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [inputAmount, setInputAmount] = useState('');

  const inputChangeValueHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(isAmountValid)
    if (!inputAmount.trim().length || inputAmount==='0') {
      setIsAmountValid(false);
      return; 
    }
    setIsAmountValid(true)
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}> 
        <Input label={'Количество'} 
        input={{
            id: props.id,
            type: 'number',
            min: '0',
            step: '1',
            defaultValue: ''
        }}
        inputChangeValueHandler={inputChangeValueHandler}
        ></Input>
        <button>Добавить</button>
        {!isAmountValid && <p>Невозможно Добавить</p>}
    </form>
  )
}

export default MealItemForm