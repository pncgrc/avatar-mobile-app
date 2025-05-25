import { UserProvider } from "@/app/context/UserContext";
import { faHouse, faPeopleGroup, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons/';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <UserProvider>
      <Tabs screenOptions={{ 
        tabBarActiveTintColor: "#3E2C23",
        tabBarStyle: {
          height: 70, // You can increase this for a lower look
          paddingBottom: 20, // Push the icons lower
          paddingTop: 10,
          backgroundColor: "#E1CAA5", // Optional: match your theme
          borderTopWidth: 0, // Optional: cleaner look
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
       }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHouse} color={color} size={size}/>
            ),
          }}
        />
        <Tabs.Screen
          name="characters"
          options={{
            title: "Characters",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faPeopleGroup} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="quiz"
          options={{
            title: "Quiz",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faQuestion} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUser} size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
