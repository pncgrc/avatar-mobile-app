import CustomAvatarButton from "@/app/components/CustomAvatarButton";
import { UserContext } from "@/app/context/UserContext";
import React, { useContext, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

export default function LoginScreen() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    const trimmedUsername = username.trim();

    if (trimmedUsername === "") {
      Alert.alert("Invalid Username", "Username can't be empty!");
      return;
    }

    login(trimmedUsername);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
      />
      <CustomAvatarButton title={"Log in"} onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 18,
  },
});