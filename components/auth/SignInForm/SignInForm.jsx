import React from "react";
import styles from "./Style";
import { View, Text, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const SignInForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();
  return (
    <View>
      <Text>Admin Id</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text>This is required.</Text>}
      <Text>Password: </Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="Password"
        defaultValue=""
      />

      <Button title="Sign In" onPress={handleSubmit(props.onSubmit)} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Sign Up")} />
    </View>
  );
};

export default SignInForm;
