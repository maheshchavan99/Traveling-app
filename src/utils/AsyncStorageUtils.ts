import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeData(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e: any) {
    console.log('store data to asyncStorage', e);
  }
}

 const getData = async (key:any) => {
  try {
    const value = await AsyncStorage.getItem(key); 
    if (value !== null) {
      const data = JSON.parse(value);
      return data; 
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw error; 
  }
};

async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e: any) {
    console.log('remove data from asyncStorage', e);
  }
}
 const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared successfully.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

export {storeData, getData, removeData,clearAsyncStorage};