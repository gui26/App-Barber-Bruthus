import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import Firebase from '../../config/Firebase';
import 'firebase/firestore'
import "firebase/auth";

import { styles } from './styles';
import { Firestore, QuerySnapshot } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
export function Login(){
const [data, setData] =useState([]);


const navigation = useNavigation();

const ScreenHome = () =>{
    navigation.navigate('Home')
}



return (
<View style={styles.view}>
    <Text style={{ fontSize: 34, 
        fontWeight: "800", 
        marginBottom: 20, 
        color:'white'}}>Login
        </Text>

    <TextInput placeholder="Email Address" style={{ color: "white"}}
    onChangeText={text => handleChange(text, "email")} />

    <TextInput placeholder="Password" style={{ color: "white"}}
    onChangeText={text => handleChange(text, 
    "pwd")} secureTextEntry={true} />

    <View style={{ flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", width: "92%", }}>

        <Button onPress={() => ScreenHome()} 
        title="Login" />

        <Button onPress={() => navigation.navigate("Home")} 
        title="Sign Up"  />
    </View>
</View>
)}