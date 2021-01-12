import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Post} from '../../components';
import {API, graphqlOperation} from 'aws-amplify';
import {listAccomodations} from '../../graphql/queries.js';
import {useRoute} from '@react-navigation/native';
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
  const {guests} = props;

  const [accomodation, setAccomodation] = useState([]);

  useEffect(() => {
    const fetchAccomodation = async () => {
      try {
        const accomodationResult = await API.graphql(
          graphqlOperation(listAccomodations, {
            filter: {
              maxGuests: {
                ge: guests.guests,
              },
            },
          }),
        );
        setAccomodation(accomodationResult.data.listAccomodations.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAccomodation();
  }, []);
  return (
    <View>
      <FlatList
        data={accomodation}
        renderItem={({item}) => <Post accomodation={item} />}
      />
    </View>
  );
};

export default SearchResultScreen;
