import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Post} from '../../components';

export interface PostProps {
  id: string;
  image: string;
  type: string;
  title: string;
  bed: number;
  bedroom: number;
  oldPrice: number;
  newPrice: number;
  totalPrice: number;
  coordinate: {};
  description: string;
}

const SearchResultScreen: React.FC = (props) => {
  const {accomodations} = props;

  return (
    <View>
      <FlatList
        data={accomodations}
        renderItem={({item}) => <Post accomodation={item} />}
      />
    </View>
  );
};

export default SearchResultScreen;
