import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    
    flex:1
    
  },
  img:{
      width:75,
      height:75,
      borderRadius:10,
      marginLeft:15
  },
  itens:{
    backgroundColor: 'white',
    marginHorizontal:24,
    height:100,
    marginTop:25,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10

  },
  name:{
    fontWeight:'700',
    fontSize:15,
    marginRight:25
  },
  info:{
    alignItems:'flex-start',
    marginRight:35
  }
});