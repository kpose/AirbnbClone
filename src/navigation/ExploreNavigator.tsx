import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SearchResultScreen} from '../screens';
import SearchResultsTabNavigator from './SearchResultsNavigatior';
const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SearchResults"
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
