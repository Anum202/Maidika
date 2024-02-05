import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import OnboardingScreen from '../screens/OnboardingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Accqueil from '../screens/Accqueil';
import Traitement from '../screens/Traitement';
import Pharmacie from '../screens/Pharmacie';
import MonProfil from '../screens/MonProfil';
import ModifyInformation from '../screens/ModifyInformation';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

//array for custom bottom tab navigation.
const tabs = [
    // {
    //     name: 'Home',
    //     component: HomeScreen,
    //     source: require('../assets/images/b1.png'),
    // },
    {
        name: 'Accqeil',
        component: HomeScreen,
        source: require('../assets/images/b1.png'),
    },
    {
        name: 'Traitement',
        component: Traitement,
        source: require('../assets/images/b2.png'),
    },
    {
        name: 'Pharmacie',
        component: Pharmacie,
        source: require('../assets/images/b4.png')
    },
    {
        name: 'Mon profil',
        component: MonProfil,
        source: require('../assets/images/b5.png')
    },
];

function TabNavigator() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const tab = tabs.find((tab) => tab.name === route.name);

                    return (
                        <View style={{ borderRadius: 25, padding: 10 }}>
                            <Image
                                source={tab.source}
                                style={{
                                    width: focused ? 20 : 20,
                                    height: focused ? 20 : 20,
                                    tintColor: focused ? 'blue' : 'gray',
                                }}
                            />
                        </View>
                    );
                },
                backgroundColor: '#ccc',
                marginBottom: 10,
            })}
        >
            {tabs.map((tab) => (
                <Tabs.Screen key={tab.name} name={tab.name} component={tab.component} />
            ))}
        </Tabs.Navigator>
    );
}

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ModifyInformation"
                    component={ModifyInformation}
                // options={{
                //     headerShown: false
                // }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default AppNavigation;
