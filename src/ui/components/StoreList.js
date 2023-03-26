import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import CustomCard from './CustomCard';
import {Stores} from '../../_mock/Stores';
import {routes} from '../../navigation/routes';
import {units} from '../../themes/Units';

const StoreList = ({navigation, route}) => {
  const [pathname, setPathName] = useState('');
  const isMatched = path => pathname === path;
  const stores = isMatched(routes.LIKED)
    ? Stores.filter(store => store.isFavourite === true)
    : Stores;

  useEffect(() => {
    setPathName(route);
  }, [route]);

  return (
    <View
      style={{
        paddingHorizontal: units.width / 25,
        marginBottom: units.height / 16,
      }}>
      {stores.map(store => (
        <CustomCard navigation={navigation} data={store} key={store.id} />
      ))}
    </View>
  );
};

export default StoreList;
