import { StatusBar } from "expo-status-bar";
import Navigation from "./configs/Navigation";
import ExpenseContextProvider from "./store/expenses-context";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <Navigation />
      </ExpenseContextProvider>
    </>
  );
}
