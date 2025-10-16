import CharacterCardBasic from "@/app/components/CharacterCardBasic";
import { CharacterCardBasicProps } from "@/app/types";
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho/400Regular';
import { useFonts } from '@expo-google-fonts/sawarabi-mincho/useFonts';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function CharactersPage() {
  const [data, setData] = useState<CharacterCardBasicProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<CharacterCardBasicProps[]>([]);
  let [fontsLoaded] = useFonts({
    SawarabiMincho_400Regular
  });

  const router = useRouter();

  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg",
    };
    const baseURL = "https://sampleapis.assimilate.be/avatar/characters";

    fetch(baseURL, { headers })
      .then((resp) => resp.json())
      .then((data: CharacterCardBasicProps[]) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.bio.nationality?.toLowerCase().includes(lowerQuery)
      );
    });
    setFilteredData(results);
  }, [searchQuery, data]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avatar Characters</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by name or nationality"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CharacterCardBasic
              characterCardBasicProps={item}
              onPress={() => router.push(`/characters/${item.name}`)}
            />
          )}
        />
      ) : (
        <Text>No results found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F0E7D8",
  },
  title: {
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 35,
    color: "#3E2C1C",
    textAlign: "center",
    marginVertical: 8,
    marginBottom: 25,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 12,
    marginBottom: 10,
    fontFamily: "SawarabiMincho_400Regular",
  },
});