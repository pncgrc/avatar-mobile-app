import { UserContext } from "@/app/context/UserContext";
import { QuizQuestions } from "@/app/types";
import { Picker } from "@react-native-picker/picker";
import React, { useContext, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomAvatarButton from "../components/CustomAvatarButton";

export default function AddQuestionsScreen() {
  const { user, setUser } = useContext(UserContext);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (value: string, index: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const validateInputs = () => {
    const trimmedAnswers = answers.map((ans) => ans.trim()).filter(Boolean);

    if (!question.trim()) {
      Alert.alert("Validation Error", "Question is required.");
      return false;
    }
    if (trimmedAnswers.length < 2) {
      Alert.alert("Validation Error", "At least two answers are required.");
      return false;
    }
    if (!correctAnswer.trim()) {
      Alert.alert("Validation Error", "Please select the correct answer.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    const possibleAnsers = answers.filter((a) => a.trim() !== "");

    const newQuestion: QuizQuestions = {
      question: question.trim(),
      possibleAnsers,
      correctAnswer,
    };

    const baseURL = "https://sampleapis.assimilate.be/avatar/questions/";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg",
      },
      body: JSON.stringify(newQuestion),
    };

    try {
      const res = await fetch(baseURL, requestOptions);
      if (!res.ok) throw new Error("Failed to submit question");

      Alert.alert("Success", "Question submitted!");
      if (user) {
        setUser({
          ...user,
          submittedQuestions: [...(user.submittedQuestions ?? []), newQuestion],
        });
      }
      setQuestion("");
      setAnswers(["", "", "", ""]);
      setCorrectAnswer("");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Question</Text>
        <TextInput
          style={styles.inputQuestion}
          placeholder="Enter your question"
          value={question}
          onChangeText={setQuestion}
          multiline
        />

        {answers.map((answer, index) => (
          <View key={index}>
            <TextInput
              style={styles.input}
              placeholder={`Answer ${index + 1}`}
              value={answer}
              onChangeText={(text) => handleAnswerChange(text, index)}
            />
          </View>
        ))}

        <Text style={styles.label}>Select Correct Answer</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={correctAnswer}
            onValueChange={(itemValue) => setCorrectAnswer(itemValue)}
          >
            <Picker.Item label="Choose one" value="" />
            {answers
              .filter((a) => a.trim() !== "")
              .map((ans, idx) => (
                <Picker.Item label={ans} value={ans} key={idx} />
              ))}
          </Picker>
        </View>
        <CustomAvatarButton title={loading ? "Submitting..." : "Submit Question"} onPress={handleSubmit} disabled={loading} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: "#F0E7D8",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    color: "#3E2C1C",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000Ponci",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  inputQuestion: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 40,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
});
