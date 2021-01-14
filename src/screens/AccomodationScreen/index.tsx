import React from 'react';
import {View, Text} from 'react-native';
import {DetailedPost} from '../../components';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';

import places from '../../assets/data/feed';
//const post = places[0];

const AccomodationScreen = () => {
  const route = useRoute();

  const post = route.params.post;

  return (
    <View style={{backgroundColor: '#fff'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default AccomodationScreen;
