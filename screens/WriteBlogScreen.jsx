import React from 'react'
import { View } from 'react-native';

import {WriteBlog} from '../components/Student/';

export default function WriteBlogScreen(){
    
    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
        <View>
            <WriteBlog onSubmit={onSubmit}/>
        </View>
    )
}