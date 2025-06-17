import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import { Button } from "../UI/Button";
import { formatDateToDDMMYYYY } from "../../utils/utils";
import globalStyles from "../../constants/globalStyles";

function ManageExpensesForm({
  onCancel,
  submitHandler,
  actionType,
  defaultValues,
}) {
  const [inputValues, setInputValues] = useState({
    date: {
      value: defaultValues?.date
        ? formatDateToDDMMYYYY(defaultValues?.date)
        : "",
      showError: false,
    },
    amount: {
      value: defaultValues?.amount ? defaultValues?.amount.toString() : "",
      showError: false,
    },
    description: {
      value: defaultValues?.description ? defaultValues?.description : "",
      showError: false,
    },
  });

  function inputValueHandler(identifier, enteredText) {
    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [identifier]: { value: enteredText, showError: false },
      };
    });
  }

  function onSubmitHandler() {
    const expensesData = {
      date: new Date(inputValues.date.value),
      amount: +inputValues.amount.value,
      description: inputValues.description.value,
    };

    const isDateValid = expensesData.date.toString() !== "Invalid Date";
    const isAmountValid =
      expensesData.amount > 0 && !isNaN(expensesData.amount);
    const isDescValid = expensesData.description.trim().length > 0;

    setInputValues((currValues) => {
      return {
        date: { value: currValues.date.value, showError: !isDateValid },
        amount: { value: currValues.amount.value, showError: !isAmountValid },
        description: {
          value: currValues.description.value,
          showError: !isDescValid,
        },
      };
    });
    if (!isDateValid || !isAmountValid || !isDescValid) {
      return false;
    }

    submitHandler(actionType, expensesData);
  }

  const showGlobalError =
    inputValues.date.showError ||
    inputValues.amount.showError ||
    inputValues.description.showError;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.container}>
        <Input
          style={styles.rowInput}
          showError={inputValues.amount.showError}
          label={"Amount"}
          config={{
            keyboardType: "decimal-pad",
            onChangeText: inputValueHandler.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          showError={inputValues.date.showError}
          label={"Date"}
          config={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputValueHandler.bind(this, "date"),
            value: inputValues.date.value,
          }}
        />
      </View>
      <View>
        <Input
          label={"Description"}
          showError={inputValues.description.showError}
          config={{
            multiline: true,
            textAlignVertical: "top",
            onChangeText: inputValueHandler.bind(this, "description"),
            value: inputValues.description.value,
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel} mode={"flat"}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={onSubmitHandler}>
          {actionType}
        </Button>
      </View>
      {showGlobalError && (
        <Text style={styles.error}>Please enter valid data</Text>
      )}
    </View>
  );
}

export default ManageExpensesForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  error: {
    marginTop: 25,
    textAlign: "center",
    color: globalStyles.colors.error500,
  },
});
