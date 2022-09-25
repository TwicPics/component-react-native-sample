import { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {installTwicPics} from '@twicpics/components-react-native';
import Gallery from './pages/Gallery.js';

import installTwicPics from './src/_/install.js';
import Basic from './pages/Basic.js';
import Home from './pages/Home.js';
import List from './pages/List.js';
import Single from './pages/Single.js';

installTwicPics({
    domain: `https://demo.twic.pics`,
    step: 100,
    debug: false
});

const Stack = createNativeStackNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                    <Stack.Screen name="Single" component={Single} options={{ title: 'Single' }} />
                    <Stack.Screen name="Basic" component={Basic} options={{ title: 'Basic' }} />
                    <Stack.Screen
                        name="Gallery"
                        component={Gallery}
                        options={{ title: 'Gallery' }}
                    />
                    <Stack.Screen
                        name="Flatlist"
                        component={List}
                        options={{ title: 'Flatlist' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;
