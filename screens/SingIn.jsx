import React from 'react'
import { View,  } from 'react-native';
import {SignInForm} from '../components/auth'

const SingIn = () => {
  const url='https://iiuc-campus-recuitement-system.herokuapp.com'
  const onSubmit=(data)=>{
    console.log(data);
    fetch(`${url}/user/signin`,{
      method:'POST',
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
   
    return (
        <View>
      <SignInForm onSubmit={onSubmit}/>
        </View>
    )
}

export default SingIn
