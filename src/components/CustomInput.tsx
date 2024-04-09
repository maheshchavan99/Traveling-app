import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Search from 'react-native-vector-icons/EvilIcons'

interface CustominputType {
  label?: string;
  onChangeText: (e: any) => void;
  placeholder: string;
  keyboardType?: any;
  secureTextEntry?: any;
  errors?: any;
  name: any;
  values: any;
  isSeach?:any
}

const CustomInput = ({
  label,
  values,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  errors,
  name,
  isSeach
}: CustominputType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input,isSeach?styles.serach:undefined]}
        value={values[name]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {errors && <Text style={{color: 'red'}}>{errors}</Text>}
  {isSeach? <Search name='search' size={30} color={"grey"} style={styles.seachIcon}/>:""}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  serach:{
paddingLeft:40,
borderRadius:20
  }
  ,seachIcon:{
position:'absolute',
top:34,
left:5
  }
});

export default CustomInput;
