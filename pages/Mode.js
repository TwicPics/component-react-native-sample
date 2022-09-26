import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
//import TwicImg from '../components/TwicImg.js';
import {TwicImg} from '@twicpics/components-react-native';

const modes = [`cover`, `contain`];
let indiceMode = 0;

const Mode = () => {
    const [mode, setMode] = useState(modes[indiceMode]);
    const changeMode = () => {
        indiceMode = (indiceMode + 1) % modes.length;
        setMode(modes[indiceMode]);
    };
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <Button title="Change mode" onPress={() => changeMode()} />
                    <View style={styles.imgContainer}>
                        <TwicImg
                            src="cat_1x1.jpg"
                            ratio="4/3"
                            mode={mode}
                            style={styles.customImage}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    imgContainer: {
        marginTop: 20
    },
    customImage: {
        height: 100
    },
    container: {
        padding: 20
    }
});

export default Mode;
