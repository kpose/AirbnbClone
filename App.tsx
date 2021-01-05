import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

//import screens
import {DestinationSearch} from './src/screens';
import {Post} from './src/components';
import Feed from './src/assets/data/feed';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <DestinationSearch />
    </SafeAreaView>
  );
};

export default App;
