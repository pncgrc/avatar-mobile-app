import CharacterCardBasic from "@/app/components/CharacterCardBasic";
import { CharacterCardPropsBasic } from "@/app/types";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";



export default function CharactersPage() {

  const [data, setData] = useState<CharacterCardPropsBasic[]>([]);

  useEffect(() => {
      const headers = { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg" };
      const baseURL = "https://sampleapis.assimilate.be/avatar/characters";
  
      fetch(baseURL, {headers})
        .then(resp => resp.json())
        .then((data: CharacterCardPropsBasic[]) => setData(data));
    }, []);

    const router = useRouter();

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
      <Text>Avatar Characters</Text>
      {
        data ? (
          <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCardBasic characterCardPropsBasic={{
            id: item.id,
            name: item.name,
            image: item.image,
            bio: {
              nationality: item.bio.nationality,
              ethnicity: item.bio.ethnicity,
              ages: item.bio.ages,
            },
            personalInformation: {
              fightingStyles: item.personalInformation.fightingStyles,
            }
          }}
          onPress={() => router.push(`/characters/${item.name}`)} />
        )}
      />
        ) : (<Text>Loading...</Text>)
      }
      
    </View>
  );
}