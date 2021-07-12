import React from 'react'
import { View, Text,TextInput,Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';


export default function WriteBlog (props) {
  const { control, handleSubmit, formState: { errors } } = useForm();
        return (
            <View>
                 <Text>Title :</Text>
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
    name="title"
    defaultValue=""
  />

  {/* Description */}
           <Text>Description: </Text>
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
    name="description"
    defaultValue=""
  />
  <Button title="Post" onPress={handleSubmit(props.onSubmit)} />
            </View>
        )
    
}


