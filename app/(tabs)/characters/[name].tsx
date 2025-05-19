import CharacterCard from "@/app/components/CharacterCardBasic";
import { CharacterCardPropsBasic } from "@/app/types";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function CharacterDetailPage() {

  const [data, setData] = useState<CharacterCardPropsBasic | null>(null);
  const { name } = useLocalSearchParams();
  
  useEffect(() => {
    console.log(`Param:${name}`);
    const headers = { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg" };
    const baseURL = "https://sampleapis.assimilate.be/avatar/characters/";

    fetch(`${baseURL}?name=${name}`, {headers})
      .then(resp => resp.json())
      .then((data) => {
        const character = Array.isArray(data) ? data[0] : data;
        setData(character);
      })
  }, [name]);


    
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#ccc",
      }}
    >
      <Text>Character detail page</Text>

      {
        data ? (
          <CharacterCard characterCardPropsBasic={data} />
        ) : (<Text>Loading...</Text>)
      }      
    </View>
  );
}