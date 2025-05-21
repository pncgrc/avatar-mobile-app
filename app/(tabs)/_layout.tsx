import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="characters"
          options={{
            title: "Characters",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="quiz"
          options={{
            title: "Quiz",
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  
  
);
  
}
