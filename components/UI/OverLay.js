import { ActivityIndicator, StyleSheet, View } from "react-native";
import globalStyles from "../../constants/globalStyles";

function OverLay(){
    return(
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={"white"}/>
        </View>
    )
}

export default OverLay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: globalStyles.colors.primary700
    }
})