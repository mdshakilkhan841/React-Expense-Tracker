import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    };

    const submitHandler = (event) =>{
        //to stop by default page reloading by javascript//
        event.preventDefault();
        
        //create an object with event data//
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        //sending object data to NewExpense.js File
        props.onSaveExpenseData(expenseData);

        //clear all display data after submit//
        setTitle('');
        setAmount('');
        setDate('');

    };


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} required/>
                </div>
                <div className="new-expense__control date">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;