import { User, UserContextType } from "@/app/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";



export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: async () => {},
  incrementQuizPoints: async () => {},
  saveUser:  async () => {}
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("currentUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const login = async (username: string) => {
    const storedUser = await AsyncStorage.getItem(`user:${username}`);
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      await AsyncStorage.setItem("currentUser", JSON.stringify(parsedUser));
      setUser(parsedUser);
    } else {
      const avatarUrl = `https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${username}`;
      const quizPoints: number = 0;
      const newUser: User = { username, avatarUrl, quizPoints, };
      await AsyncStorage.setItem(`user:${username}`, JSON.stringify(newUser));
      await AsyncStorage.setItem("currentUser", JSON.stringify(newUser));
      setUser(newUser);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("currentUser");
    setUser(null);
  };

  const saveUser = async (updatedUser: User) => {
    await AsyncStorage.setItem(`user:${updatedUser.username}`, JSON.stringify(updatedUser));
    await AsyncStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const incrementQuizPoints = async (points: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        quizPoints: user.quizPoints + points,
      };
      await saveUser(updatedUser);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, incrementQuizPoints, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};
