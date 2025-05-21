import { CharacterCardPropsDetail, Nation, NationTheme } from "@/app/types";
import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

const CharacterCardDetail = ({characterCardPropsDetail}: {characterCardPropsDetail: CharacterCardPropsDetail}) => {

  const nationTheme = getNationTheme(characterCardPropsDetail.bio.nationality, characterCardPropsDetail.bio.ethnicity);

  return (
    <ScrollView style={[styles.card, nationTheme.card]} key={characterCardPropsDetail.id}>
      <Text style={[styles.name, nationTheme.name]}>{characterCardPropsDetail.name}</Text>
      <Image source={{uri: characterCardPropsDetail.image}} style={styles.image} resizeMode="contain" />

      <Text style={[styles.title, nationTheme.name]}>Bio</Text>
      <Text style={[styles.label, nationTheme.label]}>Alternative names: <Text style={[styles.value, nationTheme.value]}>
        {
          Array.isArray(characterCardPropsDetail.bio.alternativeNames) ? characterCardPropsDetail.bio.alternativeNames.join(", ") 
          : characterCardPropsDetail.bio.alternativeNames === "NA" ? "No alternative names" : characterCardPropsDetail.bio.alternativeNames
        }</Text>
      </Text>
      <Text style={[styles.label, nationTheme.label]}>Nationality: <Text style={[styles.value, nationTheme.value]}>{characterCardPropsDetail.bio.nationality}</Text></Text>
      <Text style={[styles.label, nationTheme.label]}>Ethnicity: <Text style={[styles.value, nationTheme.value]}>{characterCardPropsDetail.bio.nationality}</Text></Text>
      <Text style={[styles.label, nationTheme.label]}>Age: <Text style={[styles.value, nationTheme.value]}>{characterCardPropsDetail.bio.ages[0] === "N" ? "No age data" : characterCardPropsDetail.bio.ages[0]}</Text></Text>
      <Text style={[styles.label, nationTheme.label]}>Born: <Text style={[styles.value, nationTheme.value]}>{characterCardPropsDetail.bio.born === "NA" ? "Unknown" : characterCardPropsDetail.bio.born}</Text></Text>
      
      <Text style={[styles.title, nationTheme.name]}>Personal information</Text>
      <Text style={[styles.label, nationTheme.label]}>Love interest: <Text style={[styles.value, nationTheme.value]}>{characterCardPropsDetail.personalInformation.loveInterest ? characterCardPropsDetail.personalInformation.loveInterest : characterCardPropsDetail.personalInformation.loveInterst}</Text></Text>
      
      <Text style={[styles.label, nationTheme.label]}>Allies: <Text style={[styles.value, nationTheme.value]}>
        {
          Array.isArray(characterCardPropsDetail.personalInformation.allies) ? characterCardPropsDetail.personalInformation.allies.join(", ") 
          : characterCardPropsDetail.personalInformation.allies === "NA" ? "No alternative names" : characterCardPropsDetail.personalInformation.allies
        }</Text>
      </Text>
      <Text style={[styles.label, nationTheme.label]}>Enemies: <Text style={[styles.value, nationTheme.value]}>
        {
          Array.isArray(characterCardPropsDetail.personalInformation.enemies) ? characterCardPropsDetail.personalInformation.enemies.join(", ") 
          : characterCardPropsDetail.personalInformation.enemies === "NA" ? "No alternative names" : characterCardPropsDetail.personalInformation.enemies
        }</Text>
      </Text>
      <Text style={[styles.label, nationTheme.label]}>Weapons of choice: <Text style={[styles.value, nationTheme.value]}>
        {
          Array.isArray(characterCardPropsDetail.personalInformation.weaponsOfChoice) ? characterCardPropsDetail.personalInformation.weaponsOfChoice.join(", ") 
          : characterCardPropsDetail.personalInformation.weaponsOfChoice === "NA" ? "No alternative names" : characterCardPropsDetail.personalInformation.weaponsOfChoice
        }</Text>
      </Text>
      <Text style={[styles.label, nationTheme.label]}>Fighting styles: <Text style={[styles.value, nationTheme.value]}>
        {
          Array.isArray(characterCardPropsDetail.personalInformation.fightingStyles) ? characterCardPropsDetail.personalInformation.fightingStyles.join(", ") 
          : characterCardPropsDetail.personalInformation.fightingStyles === "NA" ? "Doesn't fight" : characterCardPropsDetail.personalInformation.fightingStyles
        }</Text>
      </Text>

      <Text style={[styles.title, nationTheme.name]}>Political information</Text>
      <Text style={[styles.label, nationTheme.label]}>Affiliations: <Text style={[styles.value, nationTheme.value]}>
        {
          Array.isArray(characterCardPropsDetail.politicalInformation.affiliations) ? characterCardPropsDetail.politicalInformation.affiliations.join(", ") 
          : characterCardPropsDetail.politicalInformation.affiliations === "NA" ? "No affiliations" : characterCardPropsDetail.politicalInformation.affiliations
        }</Text>
      </Text>

      <Text style={[styles.title, nationTheme.name]}>Chronological information</Text>
      <Text style={[styles.label, nationTheme.label]}>First appearance: <Text style={[styles.value, nationTheme.value]}>{characterCardPropsDetail.chronologicalInformation.firstAppearance}</Text></Text>
      <Text style={[styles.label, nationTheme.label]}>Voiced by: <Text style={[styles.value, nationTheme.value]}>
        {
          Array.isArray(characterCardPropsDetail.chronologicalInformation.voicedBy) ? characterCardPropsDetail.chronologicalInformation.voicedBy.join(", ") 
          : characterCardPropsDetail.chronologicalInformation.voicedBy === "NA" ? "Not voiced" : characterCardPropsDetail.chronologicalInformation.voicedBy
        }</Text>
      </Text>
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
    backgroundColor: "#F3E9D2", // parchment-like neutral background
    padding: 20,
    shadowColor: "#3B1F00", // darker brown, like old ink
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#A67B5B", // bamboo or earth-toned border
  },
  image: {
    width: 350,
    height: 270,
    borderRadius: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 35,
    fontWeight: "700",
    color: "#3E2C1C", // dark brown for a calligraphic feel
    textAlign: "left",
    marginVertical: 8,
    marginBottom: 25,
    fontFamily: "serif", // swap with custom font if using e.g. a stylized East Asian one
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#3E2C1C", // dark brown for a calligraphic feel
    textAlign: "left",
    marginTop: 15,
    fontFamily: "serif", // swap with custom font if using e.g. a stylized East Asian one
  },
  label: {
    fontSize: 16,
    color: "#5C3A21",
    fontWeight: "600",
    marginTop: 10,
    fontFamily: "serif",
  },
  value: {
    color: "#2A1C0F",
    fontWeight: "700",
    fontFamily: "serif",
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

export default CharacterCardDetail;