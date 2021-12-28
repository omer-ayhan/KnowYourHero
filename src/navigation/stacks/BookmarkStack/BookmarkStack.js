import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookmarkScreen from '../../../pages/BookmarkScreen';
import DetailScreen from '../../../pages/DetailScreen';
import routes from '../../routes';
export default function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME_SCREEN} component={BookmarkScreen} />
      <Stack.Screen name={routes.DETAIL_SCREEN} component={DetailScreen} />
    </Stack.Navigator>
  );
}
