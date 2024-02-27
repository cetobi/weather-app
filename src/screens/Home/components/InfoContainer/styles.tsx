import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    backgroundColor: '#aaa',
    height: '33%',
    position: 'absolute',
    bottom: 0,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    height: '90%'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10
  }
});