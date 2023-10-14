import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FirstScreen from '../../views/FirstScreen';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'android') ? 10 : 0,
                },
                tabBarStyle: {
                    backgroundColor: 'rgba(255,255,255, 0.95)',
                    borderWidth: 0,
                    elevation: 0,
                    position: 'absolute',
                    height: (Platform.OS === 'android') ? 60 : 80,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={FirstScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => <Icon color={color} size={size} name="home-outline" />
                }}
            />
        </Tab.Navigator>
    );
};
