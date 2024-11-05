import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`rounded-full bg-primary w-full min-h-[50px] items-center justify-center shadow ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    >
        <Text className={`text-white font-bold $text ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton