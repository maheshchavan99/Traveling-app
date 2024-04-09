import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import { formvalidation, inputFieldsData } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../../redux/action';
import Toast from 'react-native-toast-message';

const SignUpScreen = () => {
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const navigation: any = useNavigation();
  const dispatch = useDispatch<any>();

  const handleChange = (name: any, text: any) => {
    setValues({ ...values, [name]: text });
    setErrors({ ...errors, [name]: null });
  };

  const handleSignUp = () => {
    const error = formvalidation(values, inputFieldsData);
    if (Object.keys(error).length === 0) {
      dispatch(registerSuccess(values));
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'User Sign up Successful!',
      });
      navigation.navigate('signin',{
        values
      });
      setValues({});
    } else {
      setErrors(error);
    }
  };

  const signInHandler = () => {
    navigation.navigate('signin');
    setValues({});
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.signUpText}>Sign Up</Text>
        {inputFieldsData?.map((each: any, index: any) => {
          return (
            <CustomInput
              key={index}
              label={each?.label || ''}
              values={values || ''}
              onChangeText={text => handleChange(each?.name, text)}
              placeholder={each?.placeholder || ''}
              keyboardType={each?.keyboardType}
              secureTextEntry={each?.secureTextEntry}
              errors={errors[each.name]}
              name={each?.name || ''}
            />
          );
        })}

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={signInHandler}>
          <Text style={styles.signInText}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    paddingTop: 50, 

  },
  signUpText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue', 
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

export default SignUpScreen;
