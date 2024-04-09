import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {logout } from '../../redux/action';

const profileImg = require('../../assets/images/photoprofile.png');

const ProfileScreen = () => {
  const userDetails = useSelector((state:any) => state?.auth);
  const dispatch=useDispatch()
  const onLogout = () => {
    dispatch(logout())
  };

  return (
    <View style={styles.container}>
      <Image source={profileImg} style={styles.profileIcon} />
      <Text style={styles.name}>{userDetails?.signInData?.userdData?.firstname} {userDetails?.signInData?.userdData?.lastName}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{userDetails?.signInData?.userdData?.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.info}>{userDetails?.signInData?.userdData?.phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    alignContent:"center",
    justifyContent:"center",
    gap:3
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    textAlign: "center"
  },
});

export default ProfileScreen;
