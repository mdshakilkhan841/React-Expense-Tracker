import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses";


//variable declaration using array object method//
let dummyExpenses = [
	{
		id: 'e1',
		date: new Date(2021, 3, 18),
		title: 'School Fees',
		amount: 300
	},
	{
		id: 'e2',
		date: new Date(2021, 6, 20),
		title: 'Book Fees',
		amount: 200
	},
	{
		id: 'e3',
		date: new Date(2021, 11, 25),
		title: 'Bus Fees',
		amount: 250
	},
	{
		id: 'e4',
		date: new Date(),
		title: 'Exam Fees',
		amount: 300
	}
]


const App = () => {

	const[expenses, setExpenses] = useState(dummyExpenses);

	const addExpenseHandler = (expense) => {
		const updatesExpense = [expense, ...expenses];
		setExpenses(updatesExpense);
	};

	return(
		<div>
			<h2 style={{textAlign: "center", color:"white"}}>Expense Tracker</h2>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses item={expenses} />
		</div>
	);
};

export default App;