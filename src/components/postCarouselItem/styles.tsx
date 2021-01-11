import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //height: 170,
    padding: 1,
    bottom: 5,
    marginTop: 15,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    //height: Dimensions.get('screen').height / 3.5,
    resizeMode: 'cover',
    //borderRadius: 15,
    aspectRatio: 1,
    //aspectRatio: 3 / 2,
  },

  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },

  newPrice: {
    fontWeight: 'bold',
  },

  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },

  bedrooms: {
    marginVertical: 10,
    fontSize: 16,
    color: '#5b5b5b',
  },
});
