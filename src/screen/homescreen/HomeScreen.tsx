import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import DestinationCard from './destionationCard';
import {destinationData, populordataData} from '../../mockData';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import PopularCard from './Populorcard';
const search = require('../../assets/images/search.png');
function HomeScreen() {
  const navigation = useNavigation<any>();
  const userDetails = useSelector((state: any) => state?.auth);

  const hanlePressCard = (item: any) => {
    navigation.navigate('trip-plan', {
      item,
    });
  };

  const serachHandle = () => {
    navigation.navigate('search');
  };
  const pressPopulorHandler = (item: any) => {
    navigation.navigate('trip-plan', {
      item,
    });
  };
  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={styles.headerSection}>
        <Text
          style={
            styles.lefTitle
          }>{`Welcome ${userDetails?.signInData?.userdData?.firstname} ${userDetails?.signInData?.userdData?.lastName}`}</Text>
      </View>
      <Pressable style={styles.serachDestinationCont} onPress={serachHandle}>
        <Image source={search} style={{width: 20, height: 20}} />
        <Text>Seach Destination..</Text>
      </Pressable>
      <Text style={styles.lefTitle}>Populor</Text>
      <View>
        <FlatList
          data={populordataData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <PopularCard
              data={item}
              pressPopulorHandler={pressPopulorHandler}
            />
          )}
        />
      </View>

      <Text style={styles.lefTitle}>Destinations</Text>
      <View style={{marginTop: 20}}>
        <FlatList
          data={destinationData}
          renderItem={({item}) => (
            <DestinationCard data={item} hanlePressCard={hanlePressCard} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lefTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  serachDestinationCont: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 20,
  },
});
export default HomeScreen;
