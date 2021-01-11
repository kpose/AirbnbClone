import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../assets/data/feed';
import {CustomMarker, PostCarousel} from '../../components';

const SearchResultsMap = () => {
  const [selectedPlaceID, setSelectedPlaceID] = useState<string>();
  const WIDTH = useWindowDimensions().width;

  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceID(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceID || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceID);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceID]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
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
      <View style={{position: 'absolute', bottom: 25}}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarousel accomodation={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={WIDTH - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
