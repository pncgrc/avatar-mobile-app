import CustomAvatarButton from '@/app/components/CustomAvatarButton';
import SubmittedQuestionCard from '@/app/components/SubmittedQuestionCard';
import { funEmoji } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { SawarabiMincho_400Regular } from '@expo-google-fonts/sawarabi-mincho/400Regular';
import { useFonts } from '@expo-google-fonts/sawarabi-mincho/useFonts';
import * as ImagePicker from 'expo-image-picker';
import React, { useContext, useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SvgXml } from 'react-native-svg';
import { UserContext } from "../context/UserContext";

export default function UserScreen() {
  const { user, logout, saveUser } = useContext(UserContext);
  const [localImage, setLocalImage] = useState<string | null>(null);
  let [fontsLoaded] = useFonts({
    SawarabiMincho_400Regular
  });

  useEffect(() => {
    if (user?.avatarUrl) {
      setLocalImage(user.avatarUrl);
    } else {
      setLocalImage(null);
    }
  }, [user?.avatarUrl]);

  const avatar = createAvatar(funEmoji, {
    seed: user?.username,
  }).toString();

  if (!user) return null;

  if (!fontsLoaded) {
    return null;
  }

  const pickImage = async () => {
    const response = await new Promise<"camera" | "library" | "cancel">((resolve) => {
      Alert.alert(
        "Update profile picture",
        "Choose an option",
        [
          { text: "Cancel", onPress: () => resolve("cancel"), style: "cancel" },
          { text: "Take photo", onPress: () => resolve("camera") },
          { text: "Choose from library", onPress: () => resolve("library") },
          
        ],
        { cancelable: true }
      );
    });

    if (response === "cancel") return;

    if (response === "library") {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission needed", "Permission to access media library is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedUri = result.assets[0].uri;
        setLocalImage(selectedUri);
        const updatedUser = { ...user!, avatarUrl: selectedUri };
        await saveUser(updatedUser);
      }
    }

    if (response === "camera") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission needed", "Permission to access camera is required!");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedUri = result.assets[0].uri;
        setLocalImage(selectedUri);
        const updatedUser = { ...user!, avatarUrl: selectedUri };
        await saveUser(updatedUser);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Welcome, {user.username}!</Text>

        {user.avatarUrl.startsWith("http") ? (          
          <SvgXml xml={avatar} style={styles.avatarSvg}/>
        ) : (
          <Image source={{ uri: localImage! }} style={styles.avatarImage} />
        )}

        <CustomAvatarButton title="Change profile picture" onPress={pickImage} />

        <Text style={styles.text}>
          Quiz points: <Text style={styles.bold}>{user.quizPoints}</Text>
        </Text>

        {user.submittedQuestions?.length ? (
          <>
            <Text style={styles.heading}>Submitted questions</Text>
            <ScrollView>
              {user.submittedQuestions.map((q, index) => (
                <SubmittedQuestionCard key={index} question={q.question} correctAnswer={q.correctAnswer} />
              ))}
            </ScrollView>
          </>
        ) : null}
      </ScrollView>

      <CustomAvatarButton title="Log out" onPress={logout} style={styles.buttonWrapper} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#F0E7D8",
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 35,
    color: "#3E2C1C",
    textAlign: "center",
    marginVertical: 8,
    marginBottom: 25,
  },
  avatarSvg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 15,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 15,
  },
  heading: {
    fontFamily: "SawarabiMincho_400Regular",
    fontSize: 25,
    color: "#3E2C1C",
    textAlign: "center",
    marginVertical: 8,
  },
  text: {
    color: "#3E2C23",
    fontSize: 17,
    fontFamily: "sans-serif",
    marginBottom: 10,
    alignSelf: "center",
  },
  bold: {
    fontWeight: "700",
  },
  buttonWrapper: {
    justifyContent: "flex-end",
  },
  questionContainer: {
    backgroundColor: "#fff8f0",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});