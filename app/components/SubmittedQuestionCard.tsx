// components/SubmittedQuestionItem.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SubmittedQuestionItem({ question, correctAnswer }: {question: string, correctAnswer: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Question: <Text style={styles.bold}>{question}</Text>
      </Text>
      <Text style={styles.text}>
        Correct Answer: <Text style={styles.bold}>{correctAnswer}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
