import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          // Name of the dynamic route.
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          // Name of the dynamic route.
          name="characters/index"
          options={{
            title: 'Characters',
          }}
        />
        <Tabs.Screen
          // Name of the dynamic route.
          name="quiz"
          options={{
            title: 'Quiz',
          }}
        />
      </Tabs>
    </>
  
  
);
  
}
