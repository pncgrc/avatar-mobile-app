import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function CharacterDetailPage() {

    const { name } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Character detail page</Text>
      <Text>Looking at {name}</Text>
    </View>
  );
}