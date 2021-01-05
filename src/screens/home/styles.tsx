import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginLeft: 25,
  },

  button: {
    backgroundColor: '#fff',
    width: 200,
    marginLeft: 25,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    marginHorizontal: 10,
    zIndex: 100,
    width: Dimensions.get('screen').width - 20,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
