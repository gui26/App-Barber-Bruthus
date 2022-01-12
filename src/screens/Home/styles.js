import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:'center',
   backgroundColor: "#01afec",
   
  },
  header:{
    marginTop: getStatusBarHeight() + 45,
    justifyContent:'space-between',
    flexDirection:'row',
    marginHorizontal:24,
    alignItems:'center'
  },
  title:{
    color:'white',
    fontSize:24,
    fontWeight:'700',

  },
  list: {
    width:"100%"
  },
});