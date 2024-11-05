import { View, Text, ScrollView, FlatList, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const locations = [
    { id: 10, title: "Germany", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-1.jpg" },
    { id: 9, title: "London", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-2.jpg" },
    { id: 8, title: "Virginia", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-3.jpg" },
    { id: 7, title: "San Francisco", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-2.jpg" },
    { id: 6, title: "New Jersey", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-1.jpg" },
    { id: 5, title: "Los Angeles", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-5.jpg" },
    { id: 4, title: "United States", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-4.jpg" },
    { id: 3, title: "California", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-3.jpg" },
    { id: 2, title: "New York, United States", image: "https://sandbox.bookingcore.co/uploads/demo/location/location-2.jpg" }
  ];



const home = () => {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://sandbox.bookingcore.co/api/tour/search')
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setTours(data.data);
        } else {
          console.warn("Unexpected data format:", data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching tours:", error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20, padding: 10, borderRadius: 8, backgroundColor: '#f5f5f5' }}>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, borderRadius: 8 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 5 }}>{item.title}</Text>
      <Text>Location: {item.location?.name || 'N/A'}</Text>
      <Text>Price: ${item.price}</Text>
      {item.sale_price && (
        <Text style={{ color: 'green', fontWeight: 'bold' }}>Sale Price: ${item.sale_price} ({item.discount_percent} off)</Text>
      )}
      <Text>Duration: {item.duration}</Text>
      <Text>Rating: {item.review_score?.score_total || 'N/A'} ({item.review_score?.total_review || 0} reviews)</Text>
    </View>
  );


  return (
    <SafeAreaView className='h-full px-10 bg-white'>
      <ScrollView>

        <View className='flex-row items-center justify-center pt-10 px-4'>
            <View style={{ width: "20%" }}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{ width: 50, height: 50 }}
                    resizeMode='contain'
                />
            </View>
            <View style={{ width: "80%" }} className='relative'>
                <TextInput
                    className='w-full h-[50px] shadow rounded-full pl-5'
                    placeholder='Search'
                    style={{ paddingLeft:50 }}
                />
                <Image
                    source={require('../../assets/images/searchicon.png')}
                    className='absolute'
                    style={{ left:15, top: 15 }}
                />
            </View>
        </View>

        <FlatList
        className='mt-5'
          data={locations}
          renderItem={({ item }) => (
            <View className='w-[354px] h-[407px] mr-5 relative'>
                <Image
                    source={{ uri: item.image }}
                    className='w-full'
                    style={{height: "100%", borderRadius:20}}
                />
                <Text className='absolute text-white font-bold text-2xl' style={{ bottom:30, left: 20 }}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={{ padding: 10 }}
        />

        <Text className='font-bold text-3xl mt-5 px-4'>Popular Destination</Text>
        <FlatList
        className='mt-5'
          data={locations}
          renderItem={({ item }) => (
            <View className='mr-5 relative' style={{ width:166, height: 211 }}>
                <Image
                    source={{ uri: item.image }}
                    className='w-full'
                    style={{height: "100%", borderRadius:20}}
                />
                <Text className='absolute text-white font-bold text-2xl' style={{ bottom:30, left: 20 }}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={{ padding: 10 }}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={tours || []} 
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 10 }}
          />
        )}

      </ScrollView>
    </SafeAreaView>
  )
}

export default home