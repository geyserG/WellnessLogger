import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenTrackForm          from './ScreenTrackForm';
import ScreenAnswerLogs         from './ScreenAnswerLogs';

const Tab = createBottomTabNavigator();

export default function ScreenLogger() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'New Logger') {
            iconName = 'home';
          } else if (route.name === 'Logs') {
            iconName = 'list';
          }
          return <Ionicons name={iconName} size={30} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#1dacc1',
      inactiveTintColor: 'gray',
      showLabel: false,
      tabStyle: {
        minHeight: 85,
        top: 0,
      },
      style: {
        minHeight: 85,
        shadowOffset: {
          width: 0,
          height: -5
        },
        shadowOpacity: .2,
        shadowRadius: 6,
      }
    }}
    >
        <Tab.Screen name="New Logger" showLabel={false} component={ScreenTrackForm} />
        <Tab.Screen name="Logs" component={ScreenAnswerLogs} />
    </Tab.Navigator>
  );
}