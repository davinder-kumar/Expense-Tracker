import { View, Text } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { getDayMinusDays } from "../utils/utils";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext)
  const filteredExpenses = expensesCtx.expenses.filter((expense) => {
  const today = new Date();
  const pastDate = getDayMinusDays(today, 7)
  return expense.date > pastDate
  })
  return <ExpensesOutput expenses={filteredExpenses} periodName={"Last 7 days"} />;
};

export default RecentExpenses;
