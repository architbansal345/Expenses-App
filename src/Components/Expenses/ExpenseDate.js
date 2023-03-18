import './ExpenseDate.css';
import React from 'react';

const ExpenseDate = (props) =>{
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});

    return(
        <div className='Expense-date'>
            <div className='Expense-date_month'>{ month }</div>
            <div className='Expense-date_year'>{ year}</div>
            <div className='Expense-date_day'>{ day }</div>
        </div>
    );
}
export default ExpenseDate;