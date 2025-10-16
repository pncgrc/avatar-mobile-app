import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho/400Regular';
import { useFonts } from '@expo-google-fonts/sawarabi-mincho/useFonts';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

export default function CustomAvatarButton({ title, style, onPress, disabled }: { title: string; style?: StyleProp<ViewStyle>; onPress?: () => void; disabled?: boolean }) {
  
  let [fontsLoaded] = useFonts({
    SawarabiMincho_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e0c097",
    borderWidth: 2,
    borderColor: "#4a3f35",
    borderRadius: 8,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
  },
  text: {
    color: "#2f2f2f",
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 20,
    textAlign: "center",
  },
});