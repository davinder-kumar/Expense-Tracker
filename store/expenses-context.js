import { createContext, useReducer } from "react";
export const ExpenseContext = createContext({
  addExpense: (expenseData) => {},
  expenses: {},
  setExpenses : (expensesData) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, date, amount }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [{...action.payload}, ...state];
    }
    case "UPDATE":{
      const updatableItemIndex = state.findIndex((item) => item.id === action.id);
      const updatedItem = { ...state[updatableItemIndex], ...action.payload };
      const updatedState = [ ...state];
      updatedState[updatableItemIndex]= updatedItem
      return updatedState; 
    }
    case "DELETE":{
        const updatedState = state.filter(expense => expense.id !== action.id)
        return updatedState;
    }
    case "SET" :{
      const data = action.payload;
      return data
    }
    default:
      return state;
  }
};

export function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, []);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: expenseData, id: id });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", id: id });
  }
  function setExpensesData(expenseData){
    dispatch({"type": "SET", payload: expenseData})
  } 
  
  const value = {
    expenses: state,
    setExpensesData: setExpensesData,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense
  }

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;
