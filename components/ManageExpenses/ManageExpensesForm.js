import { StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import { Button } from "../UI/Button";
import { formatDateToDDMMYYYY } from "../../utils/utils";

function ManageExpensesForm({ onCancel, submitHandler, actionType, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    date: defaultValues?.date ? formatDateToDDMMYYYY(defaultValues?.date) : "",
    amount: defaultValues?.amount ? defaultValues?.amount.toString() : "",
    description: defaultValues?.description ? defaultValues?.description : "",
  });

  function inputValueHandler(identifier, enteredText) {
    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [identifier]: enteredText,
      };
    });
  }

  function onSubmitHandler(){
    const expensesData = {
      date : new Date(inputValues.date),
      amount: +inputValues.amount,
      description: inputValues.description
    }
    submitHandler(actionType, expensesData)
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.container}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          config={{
            keyboardType: "decimal-pad",
            onChangeText: inputValueHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          config={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputValueHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <View>
        <Input
          label={"Description"}
          config={{
            multiline: true,
            textAlignVertical: "top",
            onChangeText: inputValueHandler.bind(this, "description"),
            value: inputValues.description,
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel} mode={"flat"}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          onPress={onSubmitHandler}
        >
          {actionType}
        </Button>
      </View>
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
});
