import { CharacterCardPropsBasic } from '@/app/types';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

const CharacterCard = ({characterCardPropsBasic, onPress}: {characterCardPropsBasic: CharacterCardPropsBasic, onPress: () => void;}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
        <Image source={{uri: characterCardPropsBasic.image}} style={styles.image} resizeMode="contain" />
        <Link style={styles.name} href={`/characters/${characterCardPropsBasic.name}`}>{characterCardPropsBasic.name}</Link>
        <Text style={styles.label}>Nationality: <Text style={styles.value}>{characterCardPropsBasic.bio.nationality}</Text></Text>
        <Text style={styles.label}>Age: <Text style={styles.value}>{characterCardPropsBasic.bio.ages[0]}</Text></Text>
        <Text style={styles.label}>Fighting styles: {" "}
            <Text style={styles.value}>
            {
            Array.isArray(characterCardPropsBasic.personalInformation.fightingStyles) ? characterCardPropsBasic.personalInformation.fightingStyles.join(', ') 
            : characterCardPropsBasic.personalInformation.fightingStyles
            }
            </Text>
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 15,
    elevation: 3,
    borderRadius: 15,
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    color: '#000',
    fontWeight: 600,
  },
});

export default CharacterCard;