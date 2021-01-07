import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SearchResultScreen, SearchResultsMap} from '../screens';

const Tab = createMaterialTopTabNavigator();

function SearchResultsTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name="List" component={SearchResultScreen} />
      <Tab.Screen name="Map" component={SearchResultsMap} />
    </Tab.Navigator>
  );
}

export default SearchResultsTabNavigator;
