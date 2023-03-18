import Expenses from './Components/Expenses/Expenses'; 
import React,{useState} from 'react';
import NewExpense from './Components/Expenses/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
        
    ];
const App = () =>{
    
    const[expenses , setExpenses] = useState(DUMMY_EXPENSE);
    const addExpensiveHandler = (expense) =>{
        const updatedExpense = [expense , ...expenses];
        setExpenses(updatedExpense);
    }
    return(
        <div>
            <NewExpense onAddExpense = {addExpensiveHandler}/>
            <Expenses item = {expenses}/>
        </div>
    );
} 
export default App;