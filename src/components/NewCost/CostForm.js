import './CostForm.css';
import React, { useState } from 'react';

function CostForm(props) {

    const [description, setName] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => { 
        event.preventDefault();
        const costData = {
            description,
            price,
            date: new Date(date)
        };

        props.onSaveCostData(costData);
        setName('');
        setPrice('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler} value={description}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" onChange={priceChangeHandler} value={price}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min='0.01' onChange={dateChangeHandler} value={date}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;