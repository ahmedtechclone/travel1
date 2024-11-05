import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const SecondScreen = () => {
  return (
    <SafeAreaView className='h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='justify-between items-center pt-10 h-full px-10'>
            <View>
                <Image
                    source={require('../assets/images/img1.png')}
                />
            </View>
            <View>
                <Text className='text-3xl font-bold'>Plan your trip</Text>
                <Text className='text-center mt-4'>Custom and fast planning
                with a low price</Text>
            </View>
            <View className='w-full py-20'>
                <CustomButton
                    title="Login"
                    handlePress={() => router.push('/sign-in')}
                />
                <CustomButton
                    title="Create account"
                    containerStyles="bg-white mt-4"
                    textStyles="text-black"
                    handlePress={() => router.push('/home')}
                />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SecondScreen