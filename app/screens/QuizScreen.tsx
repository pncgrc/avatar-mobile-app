import QuizCard from "@/app/components/QuizCard";
import { UserContext } from "@/app/context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { QuizQuestions } from "../types";

export default function StartQuizScreen() {
	const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState<QuizQuestions[]>([]);
  const [quizData, setQuizData] = useState<QuizQuestions[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [showAnswerFeedback, setShowAnswerFeedback] = useState<boolean>(false);
	const [correctCount, setCorrectCount] = useState<number>(0);
	const [quizEnded, setQuizEnded] = useState<boolean>(false);
	const [earnedPoints, setEarnedPoints] = useState<number>(0);
    const totalQuestions: number = 6;

    useEffect(() => {
        const headers = {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMwODAwMzdAYXAuYmUiLCJpYXQiOjE3NDc1OTQ2NDJ9.KFzP5GcRHmXdTRgx6lqO_JE-DyKgn7SZf7UP0E84Rvg",
        };
        const baseURL = "https://sampleapis.assimilate.be/avatar/questions";
    
        fetch(baseURL, { headers })
          .then((resp) => resp.json())
          .then((data: QuizQuestions[]) => {
            setData(data);
            setQuizData(chooseQuestions(data));
          });
    }, []);

    const chooseQuestions = (data: QuizQuestions[]): QuizQuestions[] => {
        const arrayBaseLength = 34;
        const chosenIndexes = new Set<number>();
        let tempArray: QuizQuestions[] = [];

        for (let i = 1; i < totalQuestions; i++) {
            let randomIndex = Math.floor(Math.random() * arrayBaseLength);

            while (chosenIndexes.has(randomIndex)) {
                randomIndex = Math.floor(Math.random() * arrayBaseLength);
            }

            chosenIndexes.add(randomIndex);
            tempArray.push(data[randomIndex]);
        }

        if (data.length > arrayBaseLength) {
            let lastQuestionIndex = Math.floor(Math.random() * (data.length - (arrayBaseLength + 1)) ) + (arrayBaseLength + 1);

            while (chosenIndexes.has(lastQuestionIndex)) {
                lastQuestionIndex = Math.floor(Math.random() * (data.length - (arrayBaseLength + 1))) + (arrayBaseLength + 1);
            }

            chosenIndexes.add(lastQuestionIndex);
            tempArray.push(data[lastQuestionIndex]);
        } else {
            let randomIndex = Math.floor(Math.random() * arrayBaseLength);

            while (chosenIndexes.has(randomIndex)) {
                randomIndex = Math.floor(Math.random() * arrayBaseLength);
            }

            chosenIndexes.add(randomIndex);
            tempArray.push(data[randomIndex]);
        }

        return tempArray;
    };



    if (!quizData.length || !quizData[currentIndex]) return null;
	const currentQuestion = quizData[currentIndex];

	const incrementQuizPoints = (points: number) => {
		if (user) {
			setUser({
				...user,
				quizPoints: user.quizPoints + points
			});
		}
	};

	const handleSelect = (answer: string) => {
		if (showAnswerFeedback) return;

		setSelectedAnswer(answer);
		setShowAnswerFeedback(true);

		const isCorrect = answer === currentQuestion.correctAnswer;

		if (isCorrect) {
			setCorrectCount((prev) => prev + 1);
			setEarnedPoints((prev) => prev + 10);
            incrementQuizPoints(10);
		}

		setTimeout(() => {
			if (currentIndex + 1 < totalQuestions) {
				setCurrentIndex((prev) => prev + 1);
				setSelectedAnswer(null);
				setShowAnswerFeedback(false);
			} else {
				setQuizEnded(true);
			}
		}, 1500);
	};

	if (quizEnded) {
		return (
			<View style={styles.resultContainer}>
				<Text style={styles.resultTitle}>Quiz Complete 🎉</Text>
				<Text style={styles.resultText}>
					You got {correctCount} out of {totalQuestions} correct!
				</Text>
				<Text style={styles.resultText}>+{earnedPoints} points earned</Text>
			</View>
		);
	}

	return (
		<QuizCard
			question={currentQuestion.question}
			answers={currentQuestion.possibleAnsers}
			correctAnswer={currentQuestion.correctAnswer}
			selectedAnswer={selectedAnswer}
			showFeedback={showAnswerFeedback}
			onSelect={handleSelect}
			questionNumber={currentIndex + 1}
			totalQuestions={totalQuestions}
		/>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffaf0",
    padding: 20,
  },
  resultTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3E2C1C",
  },
  resultText: {
    fontSize: 20,
    marginBottom: 10,
    color: "#3E2C1C",
  },
});
