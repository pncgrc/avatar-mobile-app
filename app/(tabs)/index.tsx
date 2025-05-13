import { Button, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>HOME</Text>

      <Button title="Go to settings" onPress={() => router.push("./settings")}></Button>
    </View>
  );
}