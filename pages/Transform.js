import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
//import TwicImg from '../components/TwicImg.js';
import {TwicImg} from '@twicpics/components-react-native';

const transforms = [``, `flip=x`, `flip=y`, `focus=60px50p/crop=25px25p`];
let indiceTransform = 0;

const Transform = () => {
    const [transform, setTransform] = useState(transforms[indiceTransform]);
    const changeTransform = () => {
        indiceTransform = (indiceTransform + 1) % transforms.length;
        setTransform(transforms[indiceTransform]);
    };
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <Button title="Change transform" onPress={() => changeTransform()} />
                    <View style={styles.imgContainer}>
                        <TwicImg
                            src="cat_1x1.jpg"
                            ratio="1"
                            mode="cover"
                            preTransform={transform}
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

export default Transform;
