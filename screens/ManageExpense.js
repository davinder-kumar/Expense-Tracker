import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import globalStyles from "../constants/globalStyles";
import { Button } from "../components/UI/Button";
import { ExpenseContext } from "../store/expenses-context";

const ManageExpense = ({ navigation, route }) => {
  const expensesCtx = useContext(ExpenseContext)
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function addUpdateHandler(id) {
    navigation.goBack();
    if(id){
      expensesCtx.updateExpense(id, { description: "Edited", date: new Date(), amount: 21.11 })
    }else{
      expensesCtx.addExpense("Added", new Date(), 31.99)

    }

  }
  function cancelHandler() {
    navigation.goBack();
  }
  function deleteHandler(id) {
    navigation.goBack();
    expensesCtx.deleteExpense(id)
  }
  return (
    <View style={styles.contaner}>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={cancelHandler} mode={"flat"}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={addUpdateHandler.bind(this, isEditing ? editExpenseId : null)}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
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
