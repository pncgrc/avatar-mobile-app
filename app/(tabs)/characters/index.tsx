import { Button, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function CharactersPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Characters Page</Text>
      <Link href={{
        pathname: "/characters/[name]",
        params: { name: "Aang" }
      }}>AANG</Link>

      <Button title="Go to settings" onPress={() => router.push("./settings")}></Button>
    </View>
  );
}