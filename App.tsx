import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
//import {withAuthenticator} from 'aws-amplify-react-native';

//import screens
import Router from './src/navigation/router';
import {Signup, Signin} from './src/screens';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Router /> */}
      <Signin />
    </>
  );
};

//export default withAuthenticator(App);
export default App;
