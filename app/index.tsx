import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height:"100%" }}>
        <ImageBackground
          source={require("../assets/images/bgmain.png")}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
          className="absolute"
        />
        <View className="items-center pt-32 justify-between h-full px-10">
          <View className="items-center">
            <Image
              source={require("../assets/images/logo.png")}
            />
            <Text className="text-center text-4xl font-bold mt-5">Peshot </Text>
            <Text className="text-center mt-4 text-sm">Welcome to peshot
            Book easy and cheap hotels only on Peshot</Text>
          </View>
          <View className="w-full" style={{ paddingBottom:100 }}>
            <CustomButton
              title="Let's Start"
              handlePress={()=> router.push('/second-screen')}
            />
            <Text className="text-center mt-4">Click to continue</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
