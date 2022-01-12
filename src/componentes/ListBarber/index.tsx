import React from 'react';
import { useState } from 'react';
import Atila from '../../../assets/Atila.jpeg'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityBase
} from 'react-native';
import  Barbers  from '../Barbers';
import { Rating} from 'react-native-elements'

import { styles } from './styles';
import { Button } from 'react-native-elements/dist/buttons/Button';

type Props = {
    name:string
    source:any
    avaliation:string
    title:string
    onPress:any
}
export function ListBarber(props: Props ){

  const ratingCompleted = (rating: number)=>{
    console.log('Rating is: ' + rating)

  }
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.itens}>
            <Image source={props.source} style={styles.img}/>
           
           <View style={styles.info}>
              <Text style={styles.name}>{props.name}</Text>

                  <View style={{alignItems: 'center', 
                  flexDirection:'row', 
                  marginVertical: 10}}>
                      <Rating
                      showRatting
                      imageSize={16}
                      onFinishRating={ratingCompleted}

                      />
                        <Text style={{ marginHorizontal:5, 
                          fontSize:12}}>{props.avaliation} </Text>
                  </View>

               <TouchableOpacity style={{
                 borderWidth: 1,
                 borderRadius:10,
                 borderColor: "#01afec",
                 alignItems:'center',
                 width:"70%"
               }}>
                 <Text style={{ color:"#01afec",}}>Ver Perfil</Text>
               </TouchableOpacity>
           
           </View>
           

        </View>

    </TouchableOpacity>
  );
}