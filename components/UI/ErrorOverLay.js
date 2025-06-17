import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../constants/globalStyles";

function ErrorOverLay({message = "An error Occured!"}){
    return(
        <View style={styles.container}>
           <Text>{message}</Text>
        </View>
    )
}

export default ErrorOverLay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: globalStyles.colors.primary700
    },
    text : {
        color: "white",
        fontSize: "24",
        fontWeight: "bold"
    }
})