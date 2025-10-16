import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho/400Regular';
import { useFonts } from '@expo-google-fonts/sawarabi-mincho/useFonts';
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ShowInfoProps } from "../types";



export default function Home() {
  const [data, setData] = useState<ShowInfoProps[]>([]);
  let [fontsLoaded] = useFonts({
    SawarabiMincho_400Regular
  });

  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg",
    };
    const baseURL = "https://sampleapis.assimilate.be/avatar/info";

    fetch(baseURL, { headers })
      .then((resp) => resp.json())
      .then((data: ShowInfoProps[]) => {
        setData(data);
      });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        <>
          <Image
            source={{
              uri: "https://www.pngkey.com/png/full/625-6257797_avatar-the-last-airbender-logo-transparent-avatar-the.png",
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>{data[0].synopsis}</Text>

          <Text style={styles.footerText}>
            Created by {data[0].creators[0].name} & {data[0].creators[1].name} ({data[0].yearsAired})
          </Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#F0E7D8",
  },
  image: {
    width: 350,
    height: 200,
  },
  text: {
    color: "#3E2C23",
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 18,
    lineHeight: 25
  },
  footerText: {
    color: "#3E2C23",
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 18,
  }
});