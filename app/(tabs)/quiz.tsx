import { Button, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Quiz() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>QUIZ</Text>

      <Button title="Go to settings" onPress={() => router.push("./settings")}></Button>
    </View>
  );
}