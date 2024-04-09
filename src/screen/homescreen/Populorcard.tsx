import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Location from 'react-native-vector-icons/Entypo'
import Star from 'react-native-vector-icons/FontAwesome'
import Reivewr from 'react-native-vector-icons/MaterialIcons'

const PopularCard = ({data, pressPopulorHandler}: any) => {
  return (
    <Pressable onPress={() => pressPopulorHandler(data)}>
      <View style={styles.card}>
        <Image source={{uri: data.image_url}} style={styles.image} />
        <View style={styles.overlay}>
          <View style={styles.leftContainer}>
          <Location name='location-pin' color={'#0096FF'} size={25} />
            <Text style={styles.state}>{`${data?.name}, ${data?.state}`}</Text>
          </View>

          <View style={styles.rightContainer}>
            <Star name='star' color={'#FFA500'} size={20} />
            <Text style={styles.rating}>Rating: {data.rating}</Text>
          </View>
        </View>
      <View style={styles.revierCont}>
      <Reivewr name='reviews' color={'#0096FF'} size={20}/>
        <Text style={styles.reviews}>Reviews: {data.reviews}</Text>
      </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: 25,
    width: 300,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  leftContainer: {
    flex: 1,
    flexDirection:"row",
    // alignItems:"center"
  },
  rightContainer: {
    flexDirection:"row",
    // alignItems: 'flex-end',
    
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  state: {
    fontSize: 18,
    color: '#fff',
  },
  rating: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  reviews: {
    fontSize: 16,
    color: '#fff',
   
  },
  revierCont:{
    position:"absolute",
    bottom:10,
    left:10,
    flexDirection:"row",
    alignItems:"center",
    gap:4
  }
});

export default PopularCard;
