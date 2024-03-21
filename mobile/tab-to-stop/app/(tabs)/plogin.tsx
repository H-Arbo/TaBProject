import React from "react";
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { Link, Tabs } from "expo-router";
import LoginQ from "@/components/LoginQ";
import { Text, View } from "@/components/Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function TabLoginScreen() {
  const colorScheme = useColorScheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginPatient = async () => {
    //const { email, password } = data;
    try {
      const { data } = await axios.post("/patients/login", {
        email,
        password,
      });

      if (data.error) {
        Toast.show({
          type: "error",
          text1: data.error,
        });
        setPassword("");
      } else {
        setEmail("");
        setPassword("");
        Toast.show({
          type: "success",
          text1: "Login successful",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const [loginCreds, setLoginCreds] = React.useState({
  //   email: "",
  //   pasesword: "",
  // });
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={loginPatient} />
      {/* <Text style={styles.title}>Patient Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
       */}
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
