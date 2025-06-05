import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import globalStyles from "../constants/globalStyles";
import { ExpenseContext } from "../store/expenses-context";
import ManageExpensesForm from "../components/ManageExpenses/ManageExpensesForm";

const ManageExpense = ({ navigation, route }) => {
  const expensesCtx = useContext(ExpenseContext);
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function addUpdateHandler(id) {
    navigation.goBack();
    if (id) {
      expensesCtx.updateExpense(id, {
        description: "Edited",
        date: new Date(),
        amount: 21.11,
      });
    } else {
      expensesCtx.addExpense("Added", new Date(), 31.99);
    }
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function deleteHandler(id) {
    navigation.goBack();
    expensesCtx.deleteExpense(id);
  }
  return (
    <View style={styles.contaner}>
      <ManageExpensesForm
        onCancel={cancelHandler}
        addUpdateHandler={addUpdateHandler}
        actionType={isEditing ? "Update" : "Add"}
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
  }
});
