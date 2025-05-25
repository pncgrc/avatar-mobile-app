import LoginScreen from "@/app/screens/LoginScreen";
import UserScreen from "@/app/screens/UserScreen";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return user ? <UserScreen /> : <LoginScreen />;
};

export default Profile;
