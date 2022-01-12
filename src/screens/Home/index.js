import { useNavigation } from '@react-navigation/native';
import React, { useState,useEffect} from 'react';
import {
  Button,
  Text,
  View,
  FlatList
  
} from 'react-native';
import { FiSearch } from 'react-icons/fi';
import  Barbers from '../../componentes/Barbers';
import { styles } from './styles';
import { ListBarber } from '../../componentes/ListBarber';


export function Home(){

  const navigation = useNavigation();
  const [Barbers2, setBarbers2] = useState(Barbers);
  

  const MudarTela = () =>{
    navigation.navigate('Login')
  }

  return (
   <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Encontre o seu {'\n'}
               barbeiro Favorito</Text>
            <FiSearch size={27} color='white' />
        </View>
    
        <FlatList
        data={Barbers2}
        style={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <ListBarber
          source={item.image}
          name={item.name}
          avaliation={item.avaliation}
    
         />

        )} />


        
        
      <Text>Home</Text>
      <Button title='Clique aqui' onPress={MudarTela}/>
      

      
     

      

    </View>
  );
}