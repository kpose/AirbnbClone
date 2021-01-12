import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SearchResultScreen, SearchResultsMap} from '../screens';
import {useRoute} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function SearchResultsTabNavigator() {
  const route = useRoute();

  const guests = route.params;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'}>
        {() => <SearchResultScreen guests={guests} />}
      </Tab.Screen>

      <Tab.Screen name="Map">
        {() => <SearchResultsMap guests={guests} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default SearchResultsTabNavigator;
