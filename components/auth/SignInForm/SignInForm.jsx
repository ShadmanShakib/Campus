import React from 'react'
import { View, Text,TextInput,Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const SignInForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>console.log(data)
    return (
        <View>
        <Text>Admin Id</Text>
        <Controller
    control={control}
    rules={{
     required: true,
    }}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    )}
    name="AdminId"
    defaultValue=""
  />
   {errors.AdminId && <Text>This is required.</Text>}
<Text>Password: </Text>
<Controller
  control={control}
  rules={{
   maxLength: 100,
  }}
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
    />
  )}
  name="Password"
  defaultValue=""
/>

<Button title="Sign In" onPress={handleSubmit(onSubmit)} />
    </View>
    )
}

export default SignInForm
