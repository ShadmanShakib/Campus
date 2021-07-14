import React from "react";
import { View } from "react-native";
import { SignInForm } from "../../components/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StudentSingIn = () => {
  const onSubmit = (data) => {
    fetch("https://iiuc-campus-recuitement-system.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        AsyncStorage.setItem("authToken", result.token);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
};

export default StudentSingIn;
