import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Platform} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import {colors} from '../../themes/Colors';

const CustomMap = ({height, places, handleSelect, position}) => {
  const [marks, setMarks] = useState([]);

  const [region, setRegion] = useState({});

  const THEMES = {
    streets: 'mapbox://styles/mapbox/streets-v11',
    outdoors: 'mapbox://styles/mapbox/outdoors-v11',
    light: 'mapbox://styles/mapbox/light-v10',
    dark: 'mapbox://styles/mapbox/dark-v10',
    satellite: 'mapbox://styles/mapbox/satellite-v9',
    satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
  };

  useEffect(() => {
    setMarks(places);
    setRegion({
      latitude: places[0].latitude,
      longitude: places[0].longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [places]);

  return (
    <MapView
      provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{
        height: height,
        width: '100%',
      }}
      region={region}
      mapType={'standard'}
      customMapStyle={THEMES}>
      {marks &&
        marks.map(mark => (
          <Marker
            coordinate={{
              latitude: mark.latitude,
              longitude: mark.longitude,
            }}
            onPress={() => handleSelect(mark.id)}
            key={mark.id}>
            <Image
              source={
                mark.id === position
                  ? require('../../assets/images/pin-selected.png')
                  : require('../../assets/images/pin.png')
              }
              style={{fontSize: 20, color: colors.WHITE}}
            />
          </Marker>
        ))}
    </MapView>
  );
};

export default CustomMap;

const styles = StyleSheet.create({});
