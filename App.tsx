import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigators/AppNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateAuthStatus} from './src/redux/action';
import Toast from 'react-native-toast-message';
import {getData} from './src/utils/AsyncStorageUtils';

export const navigationRef: any = React.createRef();

function App(): React.JSX.Element {
  const user = useSelector((state: any) => state.auth?.signInData);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserSignInData = async () => {
      try {
        const data = await getData('users');
        if (data && data.loginUser) {
          dispatch(updateAuthStatus(data));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserSignInData();
  }, []);

  return (
    <SafeAreaView style={styles.safeAear}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={"#F0F0F0"}
      />
      <NavigationContainer ref={navigationRef}>
        {user?.loginUser ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAear: {
    flex: 1,
  },
});

export default App;
