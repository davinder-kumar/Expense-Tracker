import { View, Text } from "react-native";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { fetchExpenses } from "../utils/axios";
import OverLay from "../components/UI/OverLay";
import ErrorOverLay from "../components/UI/ErrorOverLay";

const AllExpenses = () => {
  const expensesContext = useContext(ExpenseContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchExpensesData() {
      try {
        setIsLoading(true);
        const expensesData = await fetchExpenses();
        setIsLoading(false);
        expensesContext.setExpensesData(expensesData);
      } catch (e) {
        setIsLoading(false);
        setError("An error Occured!");
      }
    }
    fetchExpensesData();
  }, []);
  if (isLoading) {
    return <OverLay />;
  }
  if (error && !isLoading) {
    return <ErrorOverLay message={error} />;
  }
  return (
    <>
      {isLoading && <OverLay />}
      <ExpensesOutput
        expenses={expensesContext.expenses}
        periodName={"Total"}
      />
    </>
  );
};

export default AllExpenses;
