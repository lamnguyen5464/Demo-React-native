import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Info')
            }}>
                <Text>Move to Info screen</Text>
            </TouchableOpacity>
        </View>
    );
}

function InfoScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Info Screen</Text>
        </View>
    )
}

const Stack = createStackNavigator();

function TestNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#ffff",
                        shadowColor: "#ffff", // iOS
                        elevation: 0, // Android
                    },
                    headerTintColor: "#2f2f2f",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <TouchableOpacity onPress={() => {
                                    console.log("open drawer")
                                }}>
                                    <Text>Icon</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                <Stack.Screen name="Info" component={InfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default TestNavigation;