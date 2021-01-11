import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Post} from '../../components';
import feed from '../../assets/data/feed';

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

const SearchResultScreen: React.FC = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post accomodation={item} />}
      />
    </View>
  );
};

export default SearchResultScreen;
