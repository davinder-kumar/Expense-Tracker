import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../constants/globalStyles";

export const ExpensesSummary = ({ periodName, expenses }) => {
  const sum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${sum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    padding: 8
  },
  period: {
    fontSize: 12,
    color: globalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: globalStyles.colors.primary500,
  },
});
