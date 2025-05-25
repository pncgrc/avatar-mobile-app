import { StyleProp, TextStyle } from "react-native";

export interface Creator {
  name: string;
  url: string;
}

export interface ShowInfoProps {
  id: number;
  synopsis: string;
  yearsAired: string;
  genres: string[];
  creators: Creator[];
}

export interface CharacterDataW {
  id: number;
  name: string;
  image: string;
  bio: {
    alternativeNames: string[];
    nationality: string;
    ethnicity: string;
    ages: string | string[];
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

export interface CharacterCardBasicProps {
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

export interface CharacterCardDetailProps {
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

export interface UnorderedListProps {
  value: string[] | string;
  styles: {
    value: StyleProp<TextStyle>;
  };
  theme: NationTheme;
  alternateInfo: string; 
};

export interface User {
  username: string;
  avatarUrl: string;
  quizPoints: number;
}

export interface QuizQuestions {
  id: number;
  question: string;
  possibleAnsers: string[];
  correctAnswer: string;
}

export interface QuizCardProps {
	question: string;
	answers: string[];
	correctAnswer: string;
	selectedAnswer: string | null;
	showFeedback: boolean;
	onSelect: (answer: string) => void;
	questionNumber: number;
	totalQuestions: number;
};

export type Nation = "Fire Nation" | "Earth Kingdom" | "Water Tribe" | "Air Nomad";

export type NationTheme = {
  card: { backgroundColor: string; borderColor: string };
  name: { color: string, borderWidth?: number, borderColo?: string, borderRadius?: number, };
  label: { color: string };
  value: { color: string };
};