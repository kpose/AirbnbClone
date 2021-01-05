import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

//import screens
import {Guest} from './src/screens';
import {Post} from './src/components';
import Feed from './src/assets/data/feed';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Guest />
    </SafeAreaView>
  );
};

export default App;
