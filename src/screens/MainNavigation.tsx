import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './home/HomeScreen';
import { TouchableHighlight } from 'react-native';
import { StatisticsScreen } from './statistics/StatisticsScreen';
import { PositionsScreen } from './positions/PositionsScreen';
import { HistoryScreen } from './history/HistoryScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const MainNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ size, color }) => {
                    let iconName : string = '';
                    if (route.name === 'Home') {
                        iconName = 'square';
                    }
                    if (route.name === 'Positions') {
                        iconName = 'triangle';
                    }
                    if (route.name === 'History') {
                        iconName = 'circle';
                    }
                    if (route.name === 'Statistics') {
                        iconName = 'square';
                    }
                    return <Icon name={iconName} color={color} size={size}/>;
                },
                headerStyle: {
                    backgroundColor: '#4687EA',
                },
                headerRight: () => {
                    return (
                        <TouchableHighlight>
                            <Ionicons name="settings-outline" color={'white'} size={32}/>
                        </TouchableHighlight>
                    );
                },
                tabBarStyle: {
                    backgroundColor: '#4687EA',
                },
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Positions"
                component={PositionsScreen}
            />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
            />
            <Tab.Screen
                name="Statistics"
                component={StatisticsScreen}
            />
        </Tab.Navigator>
    );
};
