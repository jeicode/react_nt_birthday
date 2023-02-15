import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "src/shared/styles";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const urlLOgo = "https://raw.githubusercontent.com/xAgustin93/birthday-react-native-cli/master/src/assets/logo.png";

export default function AuthUserScreen() {
  const [loginIsActive, setLoginIsActive] = useState(true);

  return (
    <View style={[styles.view]}>
      <Image style={styles.logo} source={{ uri: urlLOgo }} />
      {loginIsActive ? <LoginForm /> : <RegisterForm />}
      <TouchableOpacity
        style={[styles.switchBtn]}
        onPress={() => setLoginIsActive((oldVal) => !oldVal)}
      >
        <Text style={styles.bottomBtnText}>
          {loginIsActive ? "Don't have an account?" : "You have an account?"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

globalStyles
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems:'center',
    backgroundColor: globalStyles.backgroundColor.backgroundColor
  },
  logo: {
    width: "80%",
    height: 240,
    marginBottom: 50,
  },
  switchBtn: {
    marginTop: 30,
  },
  bottomBtnText: {
    color: "#00a4e3",
    fontSize: 18,
  },
});
