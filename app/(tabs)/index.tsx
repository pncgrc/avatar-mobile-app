import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ShowInfoProps } from "../types";

export default function Home() {
  const [data, setData] = useState<ShowInfoProps[]>([]);

  useEffect(() => {
      const headers = {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg",
      };
      const baseURL = "https://sampleapis.assimilate.be/avatar/info";
  
      fetch(baseURL, { headers })
        .then((resp) => resp.json())
        .then((data: ShowInfoProps[]) => {
          setData(data);
        });
    }, []);

  return (
    <View style={styles.container}>

      {data.length !== 0 ? (
        <>
          <Image 
            source={{ uri: "https://www.pngkey.com/png/full/625-6257797_avatar-the-last-airbender-logo-transparent-avatar-the.png" }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>{data[0].synopsis}</Text>
          <View style={styles.alignbottom}>
            <Text style={styles.text}>Created by {data[0].creators[0].name} & {data[0].creators[1].name} ({data[0].yearsAired})</Text>
          </View>          
        </>
        ) : (
          <Text>Loading...</Text>
        )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#F0E7D8",
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 50,
  },
  text: {
    color: "#3E2C23",
    fontSize: 17,
    fontFamily: "sans-serif",
    marginBottom: 40,
    alignSelf: "center",
  },
  alignbottom: {
    flex: 1,
    justifyContent: "flex-end",
  }
});