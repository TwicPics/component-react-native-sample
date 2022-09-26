import { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {installTwicPics} from '@twicpics/components-react-native';
import Gallery from './pages/Gallery.js';

//import installTwicPics from './src/_/install.js';
import Basic from './pages/Basic.js';
import Home from './pages/Home.js';
import List from './pages/List.js';
import Ratio from './pages/Ratio.js';
import Mode from './pages/Mode.js';
import Focus from './pages/Focus.js';
import Transform from './pages/Transform.js';

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
                    <Stack.Screen name="Basic" component={Basic} options={{ title: 'Basic' }} />
                    <Stack.Screen
                        name="Flatlist"
                        component={List}
                        options={{ title: 'Flatlist' }}
                    />
                    <Stack.Screen name="Focus" component={Focus} options={{ title: 'Focus' }} />
                    <Stack.Screen
                        name="Gallery"
                        component={Gallery}
                        options={{ title: 'Gallery' }}
                    />
                    <Stack.Screen name="Mode" component={Mode} options={{ title: 'Mode' }} />
                    <Stack.Screen name="Ratio" component={Ratio} options={{ title: 'Ratio' }} />
                    <Stack.Screen
                        name="Transform"
                        component={Transform}
                        options={{ title: 'Transform' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;
