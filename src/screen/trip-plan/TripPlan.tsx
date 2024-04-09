import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Linking,
  Share,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Location from 'react-native-vector-icons/Entypo';
import Star from 'react-native-vector-icons/FontAwesome';
import Reivewr from 'react-native-vector-icons/MaterialIcons';
const TripPlan = () => {
  const {params}: any = useRoute();
  const navigation = useNavigation<any>();
  const handleLocationPress = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${params?.item?.latitude},${params?.item?.longitude}`;
    // const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    //   params?.item?.name,
    // )}`;
    Linking.openURL(url);
  };

  const shrePresshandler = async () => {
    try {
      const result = await Share.share({
        message: 'Share with your friend',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        }
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}>
        <Location name="chevron-thin-left" color={'black'} size={25} />
        <Text style={styles.headerTitel}>{params?.item?.state}</Text>
      </Pressable>

      <Image
        source={{uri: params?.item?.image_url}}
        style={styles.destinationImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>About</Text>
        <Text style={styles.descriptionText}>{params?.item?.description}</Text>

        <View style={styles.shareCont}>
          <View>
            <View style={styles.detailsContainer}>
              <Pressable
                onPress={handleLocationPress}
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <Location name="location-pin" color={'#0096FF'} size={25} />
                <Text style={styles.nameText}>{params?.item?.name},</Text>
                <Text style={styles.locationText}>{params?.item?.state}</Text>
              </Pressable>
            </View>

            <View style={styles.ratingContainer}>
              <Star name="star" color={'#FFA500'} size={20} />
              <Text style={styles.ratingText}>
                Rating: {params?.item?.rating}
              </Text>
              <Reivewr name="reviews" color={'#0096FF'} size={20} />
              <Text style={styles.reviewsText}>
                Reviews: {params?.item?.reviews}
              </Text>
            </View>
          </View>
          <Pressable onPress={shrePresshandler}>
            <Location name="share" color="grey" size={30} />
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={handleLocationPress}>
          <Text style={styles.buttonText}>Google Map</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  goBackButton: {
    marginBottom: 20,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  goBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  destinationImage: {
    width: '100%',
    height: 450,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  locationText: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    marginLeft: 5,
    marginRight: 20,
  },
  reviewsText: {
    color: 'gray',
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  shareCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default TripPlan;
