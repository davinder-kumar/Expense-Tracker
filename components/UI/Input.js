import { StyleSheet, Text, TextInput, View } from "react-native";
import globalStyles from "../../constants/globalStyles";

function Input({ label, config, style, showError }) {
  const inputStyle = [styles.input];
  if (config?.multiline) {
    inputStyle.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, showError && styles.textError]}>{label}</Text>
      <TextInput style={[inputStyle, showError && styles.inputError]} {...config} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: globalStyles.colors.primary100,
    marginBottom: 5,
  },
  input: {
    backgroundColor: globalStyles.colors.primary100,
    borderRadius: 4,
    padding: 10,
    color: globalStyles.colors.primary700,
    fontSize: 16,
    justifyContent: "center",
  },
  inputMultiline: {
    minHeight: 100,
  },
  textError: {
    color: globalStyles.colors.error500,
  },
  inputError: {
    backgroundColor: globalStyles.colors.error50,
  },
});
