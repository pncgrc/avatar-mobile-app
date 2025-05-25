import { funEmoji } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgXml } from 'react-native-svg';
import CustomAvatarButton from '../components/CustomAvatarButton';
import { UserContext } from "../context/UserContext";

export default function UserScreen() {
  const { user, logout } = useContext(UserContext);
   const avatar = createAvatar(funEmoji, {
    seed: user?.username,
  }).toString();

  if (!user) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.username}!</Text>
      <SvgXml xml={avatar} style={{ width: 100, height: 100, alignSelf: "center", marginBottom: 15 }}/>
      <Text style={styles.text}>Quiz points: <Text style={styles.quizPoints}>{user.quizPoints}</Text></Text>
      <CustomAvatarButton title={"Log out"} onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F0E7D8",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "#3E2C1C",
    textAlign: "center",
    marginVertical: 8,
    fontFamily: "serif",
    marginBottom: 25,
  },
  text: {
    color: "#3E2C23",
    fontSize: 17,
    fontFamily: "sans-serif",
    marginBottom: 40,
    alignSelf: "center",
  },
  quizPoints: {
    fontWeight: 700,
  }
});