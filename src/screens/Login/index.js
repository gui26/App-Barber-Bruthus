import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import 'firebase/firestore'
import "firebase/auth";
import Bruthus from '../../../assets/Bruthus.png'
import { styles } from './styles';
import { Firestore, QuerySnapshot } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
export function Login(){
const [data, setData] =useState([]);
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const navigation = useNavigation();

const ScreenHome = () =>{
    navigation.navigate('Home')
}

const SignUp = ()=>{
    navigation.navigate('SignUp')
}

return (
<View style={styles.view}>
    <View>
        <Image source={Bruthus} style={styles.img}/>
    </View>
    

    <TextInput 
    placeholder="Email Address" 
    style={styles.input}
    onChangeText={text => setEmail(text)} />

    <TextInput 
    placeholder="Password" 
     style={styles.input}
    onChangeText={text => setPassword(text)} />

    <View style={{  
    justifyContent:  'center', 
    alignItems: "center", width: "92%", marginTop:25}}>

       
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Home')}
            style={{ fontSize: 34, 
              
                marginBottom: 20, 
                width:"80%",
                backgroundColor:'#268596',
                borderRadius:50,
                color:'white'
                }}><Text  style={{ fontSize: 34, 
                    fontWeight: "800", 
                    padding:10,
                    textAlign:'center',
                    color:'white'
                    }}>Login</Text>
                </TouchableOpacity>
            
            </View>

                    <View style={{
                        flexDirection:'row'
                    }}>
                         <Text>Ainda não possui conta? </Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                                <Text style={{ fontWeight:'700'}}>Cadastre-se</Text>
                            </TouchableOpacity>
                    </View>
</View>
)}