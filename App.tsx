import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/componentes/Routes/routes';


export default function App() {
  return (
    <>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent 
      />
      
      <Routes />
    </>
  );
}


