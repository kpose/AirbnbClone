import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const CustomMarker = (props) => {
  const {coordinate, price} = props;
  return (
    <Marker coordinate={coordinate}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 5,
          borderRadius: 20,
          borderColor: 'grey',
          borderWidth: 1,
        }}>
        <Text style={{fontWeight: 'bold'}}>{price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
