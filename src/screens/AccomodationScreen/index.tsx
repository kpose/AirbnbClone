import React from 'react';
import {View, Text} from 'react-native';
import {DetailedPost} from '../../components';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';

import places from '../../assets/data/feed';
const post = places[0];

const AccomodationScreen = () => {
  const route = useRoute();

  const post = places.find((place) => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <DetailedPost accomodation={post} />
    </View>
  );
};

export default AccomodationScreen;
