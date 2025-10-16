import CustomAvatarButton from "@/app/components/CustomAvatarButton";
import { UserContext } from "@/app/context/UserContext";
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho/400Regular';
import { useFonts } from '@expo-google-fonts/sawarabi-mincho/useFonts';
import { useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function QuizHomePage() {
  const { user } = useContext(UserContext);
  const router = useRouter();
  let [fontsLoaded] = useFonts({
    SawarabiMincho_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avatar quiz</Text>

      <CustomAvatarButton title={"Start quiz"} onPress={() => router.push("/quiz/startquiz")} />

      { user ? <CustomAvatarButton title={"Add your own questions"} onPress={() => router.push("/quiz/addquestions")} /> : "" }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F0E7D8",
    justifyContent: "center",
  },
  title: {
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 45,
    color: "#3E2C1C", // dark brown for a calligraphic feel
    textAlign: "center",
    marginVertical: 8,
    marginBottom: 25,
  },
});