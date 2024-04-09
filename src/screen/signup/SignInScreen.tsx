import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { formvalidation, signIninputFieldsData } from '../../utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getData } from '../../utils/AsyncStorageUtils';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/action';
import Toast from 'react-native-toast-message';

const SignScreen = () => {
  const [signValues, setSignValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [signUpUserData, setSignUpUserData] = useState<any>({});
  const navigation: any = useNavigation();
  const dispatch = useDispatch<any>();
  const { params } = useRoute<any>();

  const handleChange = (name: any, text: any) => {
    setSignValues({ ...signValues, [name]: text });
    setErrors({ ...errors, [name]: null });
  };

  const handleSignIn = () => {
    const error = formvalidation(signValues, signIninputFieldsData);
    if (Object.keys(error).length === 0) {
      if (
        signUpUserData?.email === signValues?.email &&
        signUpUserData?.password === signValues?.password
      ) {
        const payload = {
          loginUser: signValues,
          userdData: signUpUserData,
        };
        dispatch(loginSuccess(payload));
        setSignValues({});
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Invalid Credentials!',
        });
      }
    } else {
      setErrors(error);
    }
  };

  const signUpHandler = () => {
    navigation.navigate('signup');
    setSignValues({})
  };

  useEffect(() => {
    const getUserSignUpData = async () => {
      try {
        const data = await getData('signupData');
        setSignUpUserData(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    getUserSignUpData();
  }, [params?.values || '']);

  console.log(params?.values,"pppp")

  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Sign In</Text>
      {signIninputFieldsData?.map((each: any, index: number) => {
        return (
          <CustomInput
            label={each?.label}
            key={index}
            values={signValues}
            onChangeText={text => handleChange(each?.name, text)}
            placeholder={each?.placeholder}
            keyboardType={each?.keyboardType}
            secureTextEntry={each?.secureTextEntry}
            errors={errors[each?.name]}
            name={each?.name}
          />
        );
      })}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignIn}>
        <Text style={styles.signUpButtonText}>Sign In</Text>
      </TouchableOpacity>
      <Pressable onPress={signUpHandler}>
        <Text style={styles.signInText}>Don't have an account? Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignContent: 'center',
    backgroundColor: '#F0F0F0', 
  },
  signUpText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color:"blue"
  },
  signInText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignScreen;
