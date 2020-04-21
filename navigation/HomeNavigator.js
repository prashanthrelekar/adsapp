import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function NavigatorOne({navigation}) {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerTitle: 'Ads home',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <Button
                      onPress={() => { navigation.toggleDrawer() }}
                      title="Info"
                      color="#fff"
                    />
                ),
            }}
        />
    </Stack.Navigator>
    );
}

function NavigatorTwo({navigation}) {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Category"
            component={CategoryScreen}
            options={{
                headerTitle: 'Category',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <Button
                      onPress={() => { navigation.toggleDrawer() }}
                      title="Info"
                      color="#fff"
                    />
                ),
            }}
        />
    </Stack.Navigator>
    );
}

const HomeNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={NavigatorOne} />
                <Drawer.Screen name="Category" component={NavigatorTwo} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HomeNavigator;
