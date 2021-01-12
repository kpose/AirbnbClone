import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

//import screens
import Router from './src/navigation/router';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
