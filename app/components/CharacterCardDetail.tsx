import { CharacterCardDetailProps, Nation, NationTheme } from "@/app/types";
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho/400Regular';
import { useFonts } from '@expo-google-fonts/sawarabi-mincho/useFonts';
import { ZhiMangXing_400Regular } from '@expo-google-fonts/zhi-mang-xing/400Regular';
import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import UnorderedList from "./UnorderedList";

const CharacterCardDetail = ({characterCardDetailProps}: {characterCardDetailProps: CharacterCardDetailProps}) => {

  let [fontsLoaded] = useFonts({
    SawarabiMincho_400Regular,
    ZhiMangXing_400Regular
  });

  const nationTheme = getNationTheme(characterCardDetailProps.bio.nationality, characterCardDetailProps.bio.ethnicity);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={[styles.card, nationTheme.card]} key={characterCardDetailProps.id}>
      <Text style={[styles.name, nationTheme.name]}>{characterCardDetailProps.name}</Text>
      <Image source={{uri: characterCardDetailProps.image}} style={styles.image} />

      <Text style={[styles.title, nationTheme.name]}>Bio</Text>

      <Text style={[styles.label, nationTheme.label]}>Alternative names:</Text>
      <UnorderedList value={characterCardDetailProps.bio.alternativeNames} styles={styles} theme={nationTheme} alternateInfo="No alternative names"/>
      
      <Text style={[styles.label, nationTheme.label]}>Nationality: <Text style={[styles.value, nationTheme.value]}>{characterCardDetailProps.bio.nationality}</Text></Text>
      <Text style={[styles.label, nationTheme.label]}>Ethnicity: <Text style={[styles.value, nationTheme.value]}>{characterCardDetailProps.bio.nationality}</Text></Text>
      <Text style={[styles.label, nationTheme.label]}>Age:{" "}        
        {
          Array.isArray(characterCardDetailProps.bio.ages) ?
          <Text style={[styles.value, nationTheme.value]}>{characterCardDetailProps.bio.ages[0]}</Text> :
          characterCardDetailProps.bio.ages === "NA" ? 
          <Text style={[styles.value, nationTheme.value]}>Unknown</Text> :
          <Text style={[styles.value, nationTheme.value]}>{characterCardDetailProps.bio.ages}</Text>          
        }
      </Text>
      <Text style={[styles.label, nationTheme.label]}>Born: <Text style={[styles.value, nationTheme.value]}>{characterCardDetailProps.bio.born === "NA" ? "Unknown" : characterCardDetailProps.bio.born}</Text></Text>
      
      <Text style={[styles.title, nationTheme.name]}>Personal information</Text>
      <Text style={[styles.label, nationTheme.label]}>Love interest: <Text style={[styles.value, nationTheme.value]}>{characterCardDetailProps.personalInformation.loveInterest ? characterCardDetailProps.personalInformation.loveInterest : characterCardDetailProps.personalInformation.loveInterst}</Text></Text>
      
      <Text style={[styles.label, nationTheme.label]}>Allies: </Text>
      <UnorderedList value={characterCardDetailProps.personalInformation.allies} styles={styles} theme={nationTheme} alternateInfo="No allies" />

      <Text style={[styles.label, nationTheme.label]}>Enemies: </Text>
      <UnorderedList value={characterCardDetailProps.personalInformation.enemies} styles={styles} theme={nationTheme} alternateInfo="No enemies" />      

      <Text style={[styles.label, nationTheme.label]}>Weapons of choice: </Text>
      <UnorderedList value={characterCardDetailProps.personalInformation.weaponsOfChoice} styles={styles} theme={nationTheme} alternateInfo="Doesn't use weapons" />
      
      <Text style={[styles.label, nationTheme.label]}>Fighting styles: </Text>
      <UnorderedList value={characterCardDetailProps.personalInformation.fightingStyles} styles={styles} theme={nationTheme} alternateInfo="Doesn't fight" />

      <Text style={[styles.title, nationTheme.name]}>Political information</Text>
      <Text style={[styles.label, nationTheme.label]}>Affiliations: </Text>
      <UnorderedList value={characterCardDetailProps.politicalInformation.affiliations} styles={styles} theme={nationTheme} alternateInfo="No affiliations" />
      

      <Text style={[styles.title, nationTheme.name]}>Chronological information</Text>
      <Text style={[styles.label, nationTheme.label]}>First appearance: <Text style={[styles.value, nationTheme.value]}>{characterCardDetailProps.chronologicalInformation.firstAppearance}</Text></Text>
      <Text style={[styles.label, nationTheme.label]}>Voiced by: </Text>
      <UnorderedList value={characterCardDetailProps.chronologicalInformation.voicedBy} styles={styles} theme={nationTheme} alternateInfo="Not voiced" />
      
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
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
    borderWidth: 3,
    borderColor: "#A67B5B",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 16,
    borderWidth: 5,
    borderColor: "#CBB08A",
  },
  name: {
    fontFamily: "ZhiMangXing_400Regular",
    fontSize: 50,
    color: "#3E2C1C",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 25,
    padding: 5,
    paddingLeft: 15,
    letterSpacing: 0.8,
  },
  title: {
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 25,
    color: "#3E2C1C",
    textAlign: "left",
    marginTop: 18,
    letterSpacing: 0.5,
    padding: 5,
  },
  label: {
    fontSize: 17,
    color: "#5C3A21",
    fontWeight: "600",
    marginTop: 12,
    fontFamily: "sans-serif",
    letterSpacing: 0.3,
  },
  value: {
    fontFamily: "SawarabiMincho_400Regular",
    color: "#2A1C0F",
    fontSize: 18,
    marginTop: 4,
  },
});

const nationThemes: Record<Nation | "default", NationTheme> = {
  "Fire Nation": {
    card: { backgroundColor: "#4B0C0C", borderColor: "#FF5C38" },
    name: { color: "#FFF3E6", borderWidth: 5, borderColor: "#CBB08A", borderRadius: 2 },
    label: { color: "#FFB49E" },
    value: { color: "#FFEEDD" },
  },
  "Earth Kingdom": {
    card: { backgroundColor: "#263A28", borderColor: "#B5D67E" },
    name: { color: "#F9FFE5", borderWidth: 5, borderColor: "#CBB08A", borderRadius: 2 },
    label: { color: "#D4F3A5" },
    value: { color: "#F0FFE0" },
  },
  "Water Tribe": {
    card: { backgroundColor: "#122E4A", borderColor: "#70C3FF" },
    name: { color: "#E8F9FF", borderWidth: 5, borderColor: "#CBB08A", borderRadius: 2 },
    label: { color: "#BDEBFF" },
    value: { color: "#E5F8FF" },
  },
  "Air Nomad": {
    card: { backgroundColor: "#FFF9E5", borderColor: "#FFD480" },
    name: { color: "#5D4037", borderWidth: 5, borderColor: "#CBB08A", borderRadius: 10},
    label: { color: "#6D4C41" },
    value: { color: "#3E2723" },
  },
  default: {
    card: { backgroundColor: "#F5F2EB", borderColor: "#CBAF87" },
    name: { color: "#2E1C0F", borderWidth: 5, borderColor: "#CBB08A", borderRadius: 2 },
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

export default CharacterCardDetail;