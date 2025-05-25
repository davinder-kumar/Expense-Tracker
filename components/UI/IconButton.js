import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ onPress, size, color, icon }) {
  return (
    <Pressable onPress={onPress}
    style={({pressed}) => pressed && styles.pressed}
    >
      <View style={styles.btnContainer}>
        <Ionicons size={size} color={color} name={icon} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    btnContainer: {
        padding : 8, 
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.7
    }
})