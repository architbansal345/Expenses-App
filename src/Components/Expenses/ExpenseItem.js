import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React from 'react';


const ExpenseItem = (props) =>{

    return(
        <div className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item_description'>
                <h2> {props.title}</h2>
                <div className='expense-item_price'>Rs.{props.amount}</div>
            </div>
        </div>
    );
}
 export default ExpenseItem