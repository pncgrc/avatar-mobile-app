import { CharacterCardBasicProps, Nation, NationTheme } from "@/app/types";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import UnorderedList from "./UnorderedList";

const CharacterCard = ({characterCardBasicProps, onPress}: {characterCardBasicProps: CharacterCardBasicProps, onPress?: () => void;}) => {

  const nationTheme = getNationTheme(characterCardBasicProps.bio.nationality, characterCardBasicProps.bio.ethnicity);

  return (
    <Pressable style={[styles.card, nationTheme.card]} onPress={onPress}>
        <Image source={{uri: characterCardBasicProps.image}} style={styles.image} resizeMode="contain" />
        <Link style={[styles.name, nationTheme.name]} href={`/characters/${characterCardBasicProps.name}`}>{characterCardBasicProps.name}</Link>
        <Text style={[styles.label, nationTheme.label]}>Nationality: <Text style={[styles.value, nationTheme.value]}>{characterCardBasicProps.bio.nationality}</Text></Text>
        <Text style={[styles.label, nationTheme.label]}>Age:{" "}        
          {
            Array.isArray(characterCardBasicProps.bio.ages) ?
            <Text style={[styles.value, nationTheme.value]}>{characterCardBasicProps.bio.ages[0]}</Text> :
            characterCardBasicProps.bio.ages === "NA" ? 
            <Text style={[styles.value, nationTheme.value]}>Unknown</Text> :
            <Text style={[styles.value, nationTheme.value]}>{characterCardBasicProps.bio.ages}</Text>          
          }
        </Text>    
        
        <Text style={[styles.label, nationTheme.label]}>Fighting styles: </Text>
        <UnorderedList value={characterCardBasicProps.personalInformation.fightingStyles} styles={styles} theme={nationTheme} alternateInfo="Doesn't fight" />        
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#F8F1E3", // softer parchment tone
    padding: 24,
    shadowColor: "#3B1F00",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#A67B5B",
    marginBottom: 24,
  },
  image: {
    width: 320,
    height: 240,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#CBB08A", // aged scroll edge
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#3E2C1C",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "serif", // consider a stylized Asian font if possible
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 17,
    color: "#5C3A21",
    fontWeight: "600",
    marginTop: 16,
    fontFamily: "sans-serif",
    letterSpacing: 0.4,
  },
  value: {
    color: "#2A1C0F",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "sans-serif",
    marginTop: 4,
  },
});

const nationThemes: Record<Nation | "default", NationTheme> = {
  "Fire Nation": {
    card: { backgroundColor: "#4B0C0C", borderColor: "#FF5C38" },
    name: { color: "#FFF3E6" },
    label: { color: "#FFB49E" },
    value: { color: "#FFEEDD" },
  },
  "Earth Kingdom": {
    card: { backgroundColor: "#263A28", borderColor: "#B5D67E" },
    name: { color: "#F9FFE5" },
    label: { color: "#D4F3A5" },
    value: { color: "#F0FFE0" },
  },
  "Water Tribe": {
    card: { backgroundColor: "#122E4A", borderColor: "#70C3FF" },
    name: { color: "#E8F9FF", },
    label: { color: "#BDEBFF" },
    value: { color: "#E5F8FF" },
  },
  "Air Nomad": {
    card: { backgroundColor: "#FFF9E5", borderColor: "#FFD480" },
    name: { color: "#5D4037" },
    label: { color: "#6D4C41" },
    value: { color: "#3E2723" },
  },
  default: {
    card: { backgroundColor: "#F5F2EB", borderColor: "#CBAF87" },
    name: { color: "#2E1C0F" },
    label: { color: "#5B4646" },
    value: { color: "#1A110D" },
  },
};





const getNationTheme = (nationality: string, ethnicity: string): NationTheme => {
  if (nationThemes[nationality as Nation]) {
    return nationThemes[nationality as Nation] || nationThemes.default;
  }
  else {
    return nationThemes[ethnicity as Nation] || nationThemes.default;
  }
};


/*const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 15,
    elevation: 3,
    borderRadius: 15,
  },
  image: {
    width: 320,
    height: 320,
    alignSelf: "center",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    color: "#000",
    fontWeight: 600,
  },
});*/

export default CharacterCard;