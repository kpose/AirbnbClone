import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {styles} from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.log('pressed')}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}> Where are you going? </Text>
      </Pressable>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near!</Text>

        <Pressable style={styles.button} onPress={() => console.log('pressed')}>
          <Text style={styles.buttonText}> Explore Nearby Places </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
