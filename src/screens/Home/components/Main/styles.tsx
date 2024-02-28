import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '50%',
    borderWidth: 1,
  },
  image: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '70%',
  },
  containerTemp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    width: '100%',
    height: '30%',
  },
  mainTemp: {
    borderWidth: 1
  },
  maxminTemp: {
    flexDirection: 'row'
  }
});