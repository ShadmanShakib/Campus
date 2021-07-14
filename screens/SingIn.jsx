import React from "react";
import { View } from "react-native";
import { SignInForm } from "../components/auth";

const SingIn = () => {
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
        localStorage.setItem("authToken", result.token);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
};

export default SingIn;
