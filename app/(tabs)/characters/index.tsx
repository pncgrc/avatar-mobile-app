import CharacterCardBasic from "@/app/components/CharacterCardBasic";
import { CharacterCardBasicProps } from "@/app/types";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function CharactersPage() {
  const [data, setData] = useState<CharacterCardBasicProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<CharacterCardBasicProps[]>([]);

  const router = useRouter();

  useEffect(() => {
    const headers = {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg",
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
    fontSize: 35,
    fontWeight: "700",
    color: "#3E2C1C", // dark brown for a calligraphic feel
    textAlign: "center",
    marginVertical: 8,
    fontFamily: "serif",
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
  },
});