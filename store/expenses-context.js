import { createContext, useReducer } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 12.99,
    date: new Date("2025-05-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 88.99,
    date: new Date("2025-05-26"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 5.19,
    date: new Date("2025-05-19"),
  },
  {
    id: "e4",
    description: "mangoes",
    amount: 9.99,
    date: new Date("2025-05-27"),
  },
  {
    id: "e5",
    description: "Protein Powder",
    amount: 211.99,
    date: new Date("2025-05-28"),
  },
  {
    id: "e6",
    description: "Protein Powder",
    amount: 211.99,
    date: new Date("2025-05-19"),
  },
  {
    id: "e7",
    description: "Protein Powder",
    amount: 211.99,
    date: new Date("2025-05-31"),
  },
  {
    id: "e8",
    description: "Protein Powder",
    amount: 211.99,
    date: new Date("2025-05-19"),
  },
  {
    id: "e9",
    description: "Protein Powder",
    amount: 211.99,
    date: new Date("2025-05-19"),
  },
];
export const ExpenseContext = createContext({
  addExpense: (description, date, amount) => {},
  expenses: {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, date, amount }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const id = new Date().toString() + Math.random(2);
      return [{ ...action.payload, id: id }, ...state];
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
    default:
      return state;
  }
};

export function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(description, date, amount) {
    dispatch({ type: "ADD", payload: {description, date, amount} });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: expenseData, id: id });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", id: id });
  }
  
  const value = {
    expenses: state,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense
  }

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;
