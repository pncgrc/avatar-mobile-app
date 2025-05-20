export interface CharacterDataW {
  id: number;
  name: string;
  image: string;
  bio: {
    alternativeNames: string[];
    nationality: string;
    ethnicity: string;
    ages: string[];
    born: string;
    died: string[];
  };
  physicalDescription: {
    gender: string;
    eyeColor: string;
    hairColor: string;
    skinColor: string;
  };
  personalInformation: {
    loveInterst: string;
    allies: string[];
    enemies: string[];
    weaponsOfChoice: string[];
    fightingStyles: string[];
  };
  politicalInformation: {
    profession: string[];
    position: string[];
    predecessor: string;
    successor: string;
    affiliations: string[];
  };
  chronologicalInformation: {
    firstAppearance: string;
    lastAppearance: string[];
    voicedBy: string[];
  };
};

/*export interface CharacterCardPropsBasic {
  name: string;
  image: string;
  nationality: string;
  age: string;
};*/

export interface CharacterCardPropsBasic {
  id: number;
  name: string;
  image: string;
  bio: {
    nationality: string;
    ethnicity: string;
    ages: string[];
  };
  personalInformation: {
    fightingStyles: string[];
  };
};

export interface CharacterCardPropsDetail {
  id: number;
  name: string;
  image: string;
  bio: {
    alternativeNames: string[];
    nationality: string;
    ethnicity: string;
    ages: string[];
    born: string;
  };
  personalInformation: {
    loveInterst: string;
    loveInterest: string;
    allies: string[];
    enemies: string[];
    weaponsOfChoice: string[];
    fightingStyles: string[];
  };
  politicalInformation: {
    affiliations: string[];
  };
  chronologicalInformation: {
    firstAppearance: string;
    voicedBy: string[];
  };
};

export type Nation = "Fire Nation" | "Earth Kingdom" | "Water Tribe" | "Air Nomad";

export type NationTheme = {
  card: { backgroundColor: string; borderColor: string };
  name: { color: string };
  label: { color: string };
  value: { color: string };
};