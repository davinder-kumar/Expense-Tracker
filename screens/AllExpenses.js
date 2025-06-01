import { View, Text } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesContext = useContext(ExpenseContext)
  return (
    // <View>
      <ExpensesOutput expenses={expensesContext.expenses} periodName={"Total"} />
    // </View>
  );
};

export default AllExpenses;
