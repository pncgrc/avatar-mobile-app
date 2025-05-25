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
      <View style={styles.content}>
        <Text style={styles.title}>Welcome, {user.username}!</Text>
        <SvgXml xml={avatar} style={{ width: 100, height: 100, alignSelf: "center", marginBottom: 15 }}/>
        <Text style={styles.text}>Quiz points: <Text style={styles.bold}>{user.quizPoints}</Text></Text>
        {user.submittedQuestions?.length !== undefined && user.submittedQuestions?.length > 0 ? <Text style={styles.heading}>Submitted questions</Text>: ""}
        {user.submittedQuestions?.map((q, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.text}>Question: <Text style={styles.bold}>{q.question}</Text></Text> 
            <Text style={styles.text}>Correct Answer: <Text style={styles.bold}>{q.correctAnswer}</Text></Text>
          </View>      
        ))}
      </View>
      <CustomAvatarButton title={"Log out"} onPress={logout} style={styles.buttonWrapper}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#F0E7D8",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
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
  heading: {
    fontSize: 25,
    fontWeight: "700",
    color: "#3E2C1C",
    textAlign: "center",
    marginVertical: 8,
    fontFamily: "serif",
  },
  text: {
    color: "#3E2C23",
    fontSize: 17,
    fontFamily: "sans-serif",
    marginBottom: 10,
    alignSelf: "center",
  },
  bold: {
    fontWeight: 700,
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
  }
});