import { StyleSheet, View } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import globalStyles from "../../constants/globalStyles";

export const ExpensesOutput = ({periodName}) => {

    const DUMMY_EXPENSES = [{
        "id": "e1",
        "description": "A pair of shoes",
        "amount": 12.99,
        "date" : new Date("2025-12-19")
    },{
        "id": "e2",
        "description": "A pair of trousers",
        "amount": 88.99,
        "date" : new Date("2025-12-19")
    },{
        "id": "e3",
        "description": "Bananas",
        "amount": 5.19,
        "date" : new Date("2025-12-19")
    },{
        "id": "e4",
        "description": "mangoes",
        "amount": 9.99,
        "date" : new Date("2025-12-19")
    },{
        "id": "e5",
        "description": "Protein Powder",
        "amount": 211.99,
        "date" : new Date("2025-12-19")
    },{
        "id": "e6",
        "description": "Protein Powder",
        "amount": 211.99,
        "date" : new Date("2025-12-19")
    },{
        "id": "e7",
        "description": "Protein Powder",
        "amount": 211.99,
        "date" : new Date("2025-12-19")
    },{
        "id": "e8",
        "description": "Protein Powder",
        "amount": 211.99,
        "date" : new Date("2025-12-19")
    },{
        "id": "e9",
        "description": "Protein Powder",
        "amount": 211.99,
        "date" : new Date("2025-12-19")
    }]

  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
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
    }
})