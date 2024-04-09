import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, Pressable, Image} from 'react-native';
import {destinationData} from '../../mockData';
import CustomInput from '../../components/CustomInput';
import DestinationCard from '../homescreen/destionationCard';
import Location from 'react-native-vector-icons/Entypo';

const SearchDestination = () => {
  const [values, setValues] = useState<any>({});
  const [filteredData, setFilteredData] = useState<any>(null);
  const navigation = useNavigation<any>();
  const hanleChange = (name: any, text: any) => {
    setValues({...values, [name]: text});
  };
  const hanlePressCard = (item: any) => {
    navigation.navigate('trip-plan', {
      item,
    });
  };

  useEffect(() => {
    if (!values.search) {
      setFilteredData(null);
    } else {
      const newData = destinationData.filter(item => {
        const itemName = item.name.toLowerCase();
        const stateName = item.state.toLowerCase();
        const searchLowerCase = values.search.toLowerCase();
        return (
          itemName.includes(searchLowerCase) ||
          stateName.includes(searchLowerCase)
        );
      });
      setFilteredData(newData);
    }
  }, [values?.search]);

  return (
    <View style={styles.searchCont}>
      <View style={styles.headerSection}>
        <Pressable onPress={() => navigation.goBack()}>
          <Location name="chevron-thin-left" color={'black'} size={25} />
        </Pressable>
        <View>
          <CustomInput
            onChangeText={text => hanleChange('search', text)}
            placeholder={'search..'}
            name="search"
            values={values || ''}
            isSeach={true}
          />
        </View>
      </View>
      {values.search ? (
        <View>
          <FlatList
            data={filteredData || null}
            renderItem={({item}) => (
              <DestinationCard data={item} hanlePressCard={hanlePressCard} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      ) : (
        <Text style={{textAlign: 'center'}}>Search The Destination...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchCont: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerSection: {},
});
export default SearchDestination;
