import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Auth} from 'aws-amplify';

const ProfileScreen = () => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Pressable
        onPress={logout}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#c3c3c3',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
