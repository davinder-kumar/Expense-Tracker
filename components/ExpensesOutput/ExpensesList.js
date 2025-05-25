import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

export const ExpensesList = ({ expenses }) => {

  function renderItem(itemData){
    return <ExpenseItem {...itemData.item} />
  }

  return (
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

  );
};
