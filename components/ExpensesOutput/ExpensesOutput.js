import { StyleSheet, Text, View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import globalStyles from "../../constants/globalStyles";

export const ExpensesOutput = ({expenses, periodName}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={expenses} />
      {expenses.length ? <ExpensesList expenses={expenses}/> : <Text style={styles.fallBackText}>No data found</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: globalStyles.colors.primary700
    },
    fallBackText : {
      color: "white",
      textAlign: "center",
      marginTop: 24,
      fontSize: 16
    }
})