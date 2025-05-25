import { Stack } from "expo-router";

export default function QuizLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="startquiz" options={{ title: "" }} />
      <Stack.Screen name="addquestions" options={{ title: "" }} />
    </Stack>
  );
}