import { CharacterCardBasicProps, Nation, NationTheme } from "@/app/types";
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho/400Regular';
import { useFonts } from '@expo-google-fonts/sawarabi-mincho/useFonts';
import { ZhiMangXing_400Regular } from '@expo-google-fonts/zhi-mang-xing/400Regular';
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import UnorderedList from "./UnorderedList";

const CharacterCard = ({characterCardBasicProps, onPress}: {characterCardBasicProps: CharacterCardBasicProps, onPress?: () => void;}) => {

  let [fontsLoaded] = useFonts({
    SawarabiMincho_400Regular,
    ZhiMangXing_400Regular
  });
  const nationTheme = getNationTheme(characterCardBasicProps.bio.nationality, characterCardBasicProps.bio.ethnicity);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Pressable style={[styles.card, nationTheme.card]} onPress={onPress}>
        <Image source={{uri: characterCardBasicProps.image}} style={styles.image} />
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
    backgroundColor: "#F8F1E3",
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
    width: "100%",
    height: 250,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#CBB08A",
  },
  name: {
    fontFamily: "ZhiMangXing_400Regular",
    fontSize: 45,
    color: "#3E2C1C",
    textAlign: "center",
    marginVertical: 10,
    letterSpacing: 0.5,
  },
  label: {
    fontFamily: "sans-serif",
    fontSize: 17,
    color: "#5C3A21",
    marginTop: 16,
    letterSpacing: 0.4,
  },
  value: {
    color: "#2A1C0F",
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 18,
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

export default CharacterCard;