import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SearchResultScreen, SearchResultsMap} from '../screens';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {listAccomodations} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

function SearchResultsTabNavigator() {
  const [accomodation, setAccomodation] = useState([]);
  const route = useRoute();

  const {guests, viewport} = route.params;

  useEffect(() => {
    const fetchAccomodation = async () => {
      try {
        const accomodationResult = await API.graphql(
          graphqlOperation(listAccomodations, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
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
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'}>
        {() => <SearchResultScreen accomodations={accomodation} />}
      </Tab.Screen>

      <Tab.Screen name="Map">
        {() => <SearchResultsMap accomodations={accomodation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default SearchResultsTabNavigator;
