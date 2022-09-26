import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
//import TwicImg from '../components/TwicImg.js';
import {TwicImg} from '@twicpics/components-react-native';

const ratios = [`1`, `4/3`, `16/9`, `3/4`, `none`];
let indiceRatio = 0;

const Ratio = () => {
    const [ratio, setRatio] = useState(ratios[indiceRatio]);
    const changeRatio = () => {
        indiceRatio = (indiceRatio + 1) % ratios.length;
        setRatio(ratios[indiceRatio]);
    };
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <Button title="Change ratio" onPress={() => changeRatio()} />
                    <View style={styles.imgContainer}>
                        <TwicImg
                            src="cat_1x1.jpg"
                            ratio={ratio}
                            mode="cover"
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

export default Ratio;
