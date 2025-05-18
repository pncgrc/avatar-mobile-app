import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {

  /*useEffect(() => {
    const headers = { 'Authorization': 'Bearer my-token' };
    const baseURL = "https://sampleapis.assimilate.be/futurama/characters/";

    fetch(baseURL, {headers})
      .then(resp => resp.json())
      .then(data => console.log(data));
  }, []);*/

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