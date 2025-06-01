import { Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../constants/globalStyles";

export const Button = ({ style, children, mode, onPress }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode ==="flat" && styles.flat]}>
          <Text style={[styles.text, mode==="flat" && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 4,
        alignItems: "center",
        backgroundColor: globalStyles.colors.primary500
    },
    flat: {
        backgroundColor: "transparent"
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: globalStyles.colors.primary100,
        borderRadius: 4
    },
    text: {
        color: "white"
    },
    flatText: {
        color: globalStyles.colors.primary200
    }

})