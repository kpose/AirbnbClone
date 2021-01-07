import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import {styles} from './styles';
import searchResults from '../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './suggestionRow';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        //enablePoweredByContainer={false}
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyDK0GB99sGpyNT3WKsDqKz2rYaatI1xbN4',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
