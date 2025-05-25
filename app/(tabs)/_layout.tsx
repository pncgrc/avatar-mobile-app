import { UserProvider } from "@/app/context/UserContext";
import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <UserProvider>
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
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
