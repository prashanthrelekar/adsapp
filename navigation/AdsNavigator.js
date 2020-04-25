import React from 'react';
import { Platform, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import AdsOverviewScreen from '../screens/AdsOverviewScreen';
import CategoryScreen from '../screens/CategoryScreen';
import HeaderButton from '../components/UI/HeaderButton';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function NavigatorOne({navigation}) {
    console.log(navigation);
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Ads overview"
            component={AdsOverviewScreen}
            options={{
                headerTitle: 'Ads overview',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                      title="Menu"
                      iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                      onPress={() => { navigation.toggleDrawer(); }}
                    />
                  </HeaderButtons>
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

const AdsNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Ads overview" component={NavigatorOne} />
                <Drawer.Screen name="Category" component={NavigatorTwo} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AdsNavigator;
