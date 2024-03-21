import React from "react";
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { useColorScheme } from "@/components/useColorScheme";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function DoctorLoginScreen() {
  const colorScheme = useColorScheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginDoctor = async () => {
    //const { email, password } = data;
    try {
      const { data } = await axios.post("/dlogin", {
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

    // Title and form
    <View style={styles.container}>
      
      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.text}>
          Doctor Login
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>

        {/* Email field */}
        <View style={styles.field}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            placeholder="email"
            placeholderTextColor={'gray'}
          />
        </View>

        {/* Password field */}
        <View style={styles.field}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
            placeholderTextColor={'gray'}
            secureTextEntry={true}
          />
        </View>

        {/* Login Field */}
        <TouchableOpacity style={styles.loginbutton} onPress={loginDoctor}>
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableOpacity>

      </View>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  form: {
    alignItems: 'center',
    marginHorizontal: 4,
    marginVertical: 4,
    width: '90%',
  },
  field: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', 
    padding: 4,
    borderRadius: 8, 
    width: '90%',
    marginBottom: 8,
  },
  loginbutton: {
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#4FD1C5', 
    padding: 12, 
    borderRadius: 20, 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
  
