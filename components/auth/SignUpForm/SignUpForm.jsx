import React from 'react'
import { View, Text,TextInput,Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const SignUpForm = (props) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <View>
         <Text>Name :</Text>
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
    name="name"
    defaultValue=""
  />
   {errors.name && <Text>This is required.</Text>}


  {/* E-mail */}
           <Text>E-mail: :</Text>
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
    name="email"
    defaultValue=""
  />
  {/* Password Input */}
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
  name="password"
  defaultValue=""
/>

<Button title="Sign Up" onPress={handleSubmit(props.onSubmit)} />
        </View>
    )
}

export default SignUpForm
