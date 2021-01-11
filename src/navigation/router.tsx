import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DestinationSearch, Guest, AccomodationScreen} from '../screens';
import HomeTabNavigator from './HomeTab/HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearch}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name="Guests"
          component={Guest}
          options={{
            title: 'How many people',
          }}
        />
        <Stack.Screen
          name="Post"
          component={AccomodationScreen}
          options={{
            title: 'Accomodation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
