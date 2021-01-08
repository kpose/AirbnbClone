import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //height: 170,
    padding: 5,
    bottom: 30,
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
    lineHeight: 26,
    fontSize: 18,
  },
  prices: {
    fontSize: 18,
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
