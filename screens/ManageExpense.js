import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import globalStyles from "../constants/globalStyles";
import { ExpenseContext } from "../store/expenses-context";
import ManageExpensesForm from "../components/ManageExpenses/ManageExpensesForm";
import { saveExpense, updateExpense, deleteExpense } from "../utils/axios";
import OverLay from "../components/UI/OverLay";
import ErrorOverLay from "../components/UI/ErrorOverLay";

const ManageExpense = ({ navigation, route }) => {
  const [error, setError] = useState("");
  const expensesCtx = useContext(ExpenseContext);
  const [isLoading, setIsLoading] = useState(false);
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  const editingExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function submitHandler(id, inputValues) {
    setIsLoading(true);
    if (id === "Update") {
      expensesCtx.updateExpense(editExpenseId, inputValues);
      try {
        await updateExpense(editExpenseId, inputValues);
      } catch (e) {
        setIsLoading(false);
        setError("An error occured!");
      }
    } else {
      try {
        const id = await saveExpense(inputValues);
        expensesCtx.addExpense({ ...inputValues, id });
      } catch (e) {
        setIsLoading(false);
        setError("An error occured!");
      }
    }
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function deleteHandler(id) {
    setIsLoading(true);
    try {
      await deleteExpense(id);
    } catch (e) {
      return setError("An error occured!");
    }
    expensesCtx.deleteExpense(id);
    navigation.goBack();
  }
  if (error && !isLoading) {
    <ErrorOverLay message={error} />;
  }
  return (
    <View style={styles.contaner}>
      <ManageExpensesForm
        onCancel={cancelHandler}
        submitHandler={submitHandler}
        actionType={isEditing ? "Update" : "Add"}
        defaultValues={editingExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={globalStyles.colors.error500}
            size={36}
            onPress={deleteHandler.bind(this, editExpenseId)}
          />
        </View>
      )}
      {isLoading && <OverLay />}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: globalStyles.colors.primary800,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 12,
    paddingTop: 8,
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "white",
  },
});
