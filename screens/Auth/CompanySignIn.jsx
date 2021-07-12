import React from 'react'
import { View, Text } from 'react-native';
import { SignInForm} from '../../components/auth';

const CompanySignIn = () => {

    const onSubmit=(data)=>console.log(data)

    return (
        <View>
            <SignInForm onSubmit={onSubmit}/>
        </View>
    )
}

export default CompanySignIn