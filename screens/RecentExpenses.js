import { View, Text } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput periodName={"Last 7 days"} />;
};

export default RecentExpenses;
