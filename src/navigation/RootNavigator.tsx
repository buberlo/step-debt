import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CollectorsScreen from '../screens/CollectorsScreen';
import LedgerScreen from '../screens/LedgerScreen';
import { colors } from '../theme';

type RootTabParamList = {
  Home: undefined;
  Collectors: undefined;
  Ledger: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const tabIcons: Record<keyof RootTabParamList, string> = {
  Home: '👟',
  Collectors: '📣',
  Ledger: '📖',
};

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.background,
    text: colors.text,
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: '700',
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.muted,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopWidth: 1,
            borderTopColor: colors.muted,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.55 }}>
              {tabIcons[route.name] ?? '•'}
            </Text>
          ),
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Step Debt' }}
        />
        <Tab.Screen
          name="Collectors"
          component={CollectorsScreen}
          options={{ title: 'Collectors' }}
        />
        <Tab.Screen
          name="Ledger"
          component={LedgerScreen}
          options={{ title: 'Shoe Ledger' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}