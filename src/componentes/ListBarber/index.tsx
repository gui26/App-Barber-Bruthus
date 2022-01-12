import React from 'react';
import { useState } from 'react';
import Atila from '../../../assets/Atila.jpeg'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import  Barbers  from '../Barbers';

import { styles } from './styles';

type Props = {
    name:string
    source:any
    avaliation:number
}
export function ListBarber(props: Props ){

  
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.itens}>
            <Image source={props.source} style={styles.img}/>
           
           <View>
           <Text>{props.name}</Text>
            <Text>{props.avaliation}</Text>
           </View>
           

        </View>

    </TouchableOpacity>
  );
}