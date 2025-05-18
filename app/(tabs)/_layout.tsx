import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="characters"
          options={{
            title: "Characters",
          }}
        />
        <Tabs.Screen
          name="quiz"
          options={{
            title: "Quiz",
          }}
        />
      </Tabs>
    </>
  
  
);
  
}
