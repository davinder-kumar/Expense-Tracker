import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import globalStyles from "../../constants/globalStyles";
import { formatDateToDDMMYYYY } from "../../utils/utils";

function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable
     style={({pressed}) => pressed && styles.pressed}
     >
      <View style={styles.container }>
        <View>
          <Text style={[styles.description, styles.textBase]}>{description}</Text>
          <Text style={[styles.date,styles.textBase]}>{formatDateToDDMMYYYY(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor:globalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 2,
    shadowColor: globalStyles.colors.gray500,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
  },
  textBase: {
    color : globalStyles.colors.primary50
  },
  pressed: {
    opacity: 0.7,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold"
  },
  date: {
    fontSize: 12,
    marginTop: 4,
  },
  amountContainer: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    fontWeight: "bold"
  },
});

export default ExpenseItem;
