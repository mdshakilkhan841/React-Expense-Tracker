import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;

//------------Another method for date, Month, Year-------------//
//     const day = props.date.getDate();
//     const month = props.date.getMonth();
//     const year = props.date.getFullYear();
//     const format = [day, month, year].join(' - ');
