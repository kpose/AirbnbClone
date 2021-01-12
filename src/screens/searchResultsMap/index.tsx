import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {CustomMarker, PostCarousel} from '../../components';
import {API, graphqlOperation} from 'aws-amplify';
import {listAccomodations} from '../../graphql/queries.js';

const SearchResultsMap = () => {
  const [selectedPlaceID, setSelectedPlaceID] = useState<string>();
  const [accomodation, setAccomodation] = useState([]);

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
    const fetchAccomodation = async () => {
      try {
        const accomodationResult = await API.graphql(
          graphqlOperation(listAccomodations),
        );
        setAccomodation(accomodationResult.data.listAccomodations.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAccomodation();
  }, []);

  useEffect(() => {
    if (!selectedPlaceID || !flatlist) {
      return;
    }
    const index = accomodation.findIndex(
      (place) => place.id === selectedPlaceID,
    );
    flatlist.current.scrollToIndex({index});

    const selectedPlace = accomodation[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
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
        {accomodation.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceID}
            key={place.id}
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            price={place.newPrice}
            onPress={() => setSelectedPlaceID(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 25}}>
        <FlatList
          ref={flatlist}
          data={accomodation}
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
