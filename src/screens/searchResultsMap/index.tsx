import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../assets/data/feed';
import {CustomMarker, PostCarousel} from '../../components';

const SearchResultsMap = () => {
  const [selectedPlaceID, setSelectedPlaceID] = useState<string>();
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5324047,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceID}
            key={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
            onPress={() => setSelectedPlaceID(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 40}}>
        <PostCarousel accomodation={places[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMap;
