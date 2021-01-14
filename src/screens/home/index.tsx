import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {styles} from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}> Where are you going? </Text>
      </Pressable>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near!</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Destination Search')}>
          <Text style={styles.buttonText}> Explore Nearby Places </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
