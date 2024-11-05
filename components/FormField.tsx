import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ placeholder, value, handleChnageText, otherStyles }) => {
  return (
    <View className={`mt-5 other ${otherStyles}`}>
        <TextInput
            className='w-full h-[50px] shadow rounded-full pl-5'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#000000"
            onChangeText={handleChnageText}
            secureTextEntry={placeholder === "Password"}
        />
    </View>
  )
}

export default FormField