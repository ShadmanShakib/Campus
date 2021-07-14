import React from "react";
import { View, Text } from "react-native";
import { SignUpForm } from "../../components/auth";

const CompanySignUp = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const onSubmit = () => {
    fetch(
      "https://iiuc-campus-recuitement-system.herokuapp.com/temporary/company/signup",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <View>
      <SignUpForm onSubmit={onSubmit} />
    </View>
  );
};

export default CompanySignUp;
