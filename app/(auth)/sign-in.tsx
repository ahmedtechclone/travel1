import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <SafeAreaView className='h-full'>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
            <View className='justify-between h-full pt-20 px-10'>
                <View>
                    <Text className='text-3xl font-bold'>Login</Text>
                    <View className='flex-row gap-3' style={{ marginTop: 30 }}>
                        <View style={{ width: "50%" }}>
                            <TouchableOpacity className='shadow flex-row min-h-[50px] items-center justify-center rounded-full gap-3'>
                                <Image
                                    source={require('../../assets/images/gicon.png')}
                                />
                                <Text>Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "50%" }}>
                            <TouchableOpacity className='shadow flex-row min-h-[50px] items-center justify-center rounded-full gap-3' style={{ backgroundColor: "#3498DB" }}>
                                <Image
                                    source={require('../../assets/images/ficon.png')}
                                />
                                <Text className='text-white'>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text className='text-center' style={{ marginTop: 30 }}>Or log in using</Text>
                    <View style={{ marginTop: 50 }}>
                        <FormField
                            placeholder="Mail"
                        />
                        <FormField
                            placeholder="Password"
                        />
                        <Text className='text-end mt-4'>Forgot your password?</Text>
                        <CustomButton
                            title="Login"
                            containerStyles="mt-5"
                        />
                    </View>
                </View>
                <View className='w-full' style={{ paddingBottom: 100 }}>
                    <Text className='text-center'>Don’t have an account yet? <Link href="/sign-up" style={{color:"#00cec9"}}>Sign up</Link></Text>
                </View>
            </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignIn