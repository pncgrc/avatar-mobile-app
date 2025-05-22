import { CharacterCardBasicProps, Nation, NationTheme } from "@/types";
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
    backgroundColor: "#F3E9D2", // parchment-like neutral background
    padding: 20,
    shadowColor: "#3B1F00", // darker brown, like old ink
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginBottom: 20,
    elevation: 5,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#A67B5B", // bamboo or earth-toned border
  },
  image: {
    width: 320,
    height: 240,
    borderRadius: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#3E2C1C", // dark brown for a calligraphic feel
    textAlign: "center",
    marginVertical: 8,
    fontFamily: "serif", // swap with custom font if using e.g. a stylized East Asian one
  },
  label: {
    fontSize: 16,
    color: "#5C3A21",
    fontWeight: "600",
    marginTop: 15,
    fontFamily: "sans-serif",
  },
  value: {
    color: "#2A1C0F",
    fontWeight: "700",
    fontFamily: "sans-serif",
  },
});



const nationThemes: Record<Nation | "default", NationTheme> = {
  "Fire Nation": {
    card: { backgroundColor: "#3B0A0A", borderColor: "#FF5C38" }, // deep crimson + fiery orange border
    name: { color: "#FFFFFF" },             // white — strong contrast
    label: { color: "#FFA07A" },            // light salmon
    value: { color: "#FFEEDD" },            // warm off-white
  },
  "Earth Kingdom": {
    card: { backgroundColor: "#2C3B2A", borderColor: "#B5D67E" }, // earthy green tone
    name: { color: "#FFFFFF" },
    label: { color: "#C8E6A0" },            // pastel green
    value: { color: "#F2FFE9" },            // creamy mint
  },
  "Water Tribe": {
    card: { backgroundColor: "#1B3A57", borderColor: "#70C3FF" }, // dark navy
    name: { color: "#FFFFFF" },
    label: { color: "#AEDFF7" },            // bright light blue
    value: { color: "#E5F8FF" },         // soft ice blue
  },
  "Air Nomad": {
    card: { backgroundColor: "#FFF7E0", borderColor: "#FFCC80" }, // light parchment gold
    name: { color: "#4E342E" },             // deep brown
    label: { color: "#5D4037" },            // medium brown
    value: { color: "#3E2723" },            // dark chocolate
  },
  default: {
    card: { backgroundColor: "#F4F1EC", borderColor: "#CBAF87" }, // neutral soft base
    name: { color: "#2E1C0F" },
    label: { color: "#5B4646" },
    value: { color: "#000000" },
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