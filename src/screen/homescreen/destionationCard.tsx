import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Location from 'react-native-vector-icons/Entypo'
import Star from 'react-native-vector-icons/FontAwesome'

interface DestinationCardType {
  data: any;
  hanlePressCard: (data: any) => void;
}
const DestinationCard = ({hanlePressCard, data}: DestinationCardType) => {
  return (
    <Pressable style={styles.card} onPress={() => hanlePressCard(data)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: data?.image_url}} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{data?.name || ''}</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            marginBottom: 10,
          }}>
         <Location name='location-pin' size={20} color={'grey'}/>
          <Text style={styles.state}>{data?.state || ''}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
         <Star name='star' size={20} color='#FFA500'/>
          <Text style={styles.rating}>Rating: {data?.rating || ''}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 150,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  state: {
    fontSize: 16,
    color: '#666',
  },
  rating: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DestinationCard;
