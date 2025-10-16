import CustomAvatarButton from "@/app/components/CustomAvatarButton";
import { QuizCardProps } from "@/app/types";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function QuizCard({
	question,
	answers,
	correctAnswer,
	selectedAnswer,
	showFeedback,
	onSelect,
	questionNumber,
	totalQuestions
}: QuizCardProps) {
	return (
		<View style={styles.container}>
			<View style={styles.questionContainer}>
				<Text style={styles.questionNumber}>
					Question {questionNumber} of {totalQuestions}
				</Text>
				<Text style={styles.questionText}>{question}</Text>
			</View>

			<View style={styles.drawer}>
				{answers.map((answer, index) => {
					let backgroundColor = "#e0c097";
					if (showFeedback) {
						if (answer === correctAnswer) {
							backgroundColor = "#7fb77e";
						} else if (answer === selectedAnswer) {
							backgroundColor = "#e06d5b";
						}
					}

					return (
						<CustomAvatarButton
							key={index}
							title={answer}
							onPress={() => onSelect(answer)}
							style={[ backgroundColor ? { backgroundColor } : {}]}
						/>
					);
				})}
			</View>
		</View>
	);
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0E7D8",
  },
  questionContainer: {
    height: height * 0.25,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0E7D8",
  },
  questionNumber: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
    color: "#3a2f27",
  },
  questionText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "serif",
    color: "#3a2f27",
  },
  drawer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
    justifyContent: "space-evenly",
  }
});
