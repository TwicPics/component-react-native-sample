import { ScrollView, StyleSheet, Text, View } from 'react-native';
//import TwicImg from '../components/TwicImg.js';
import {TwicImg} from '@twicpics/components-react-native';

const Basic = () => {
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imgContainer}>
                        <TwicImg src="cat_1x1.jpg" style={styles.customImage} mode="cover" />
                        <Text> Test</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="cat_1x1.jpg" ratio="16/9" mode="cover" />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="cat_1x1.jpg" ratio="4/3" mode="contain" />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="cat_1x1.jpg" ratio="16/9" mode="contain" />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="cat_1x1.jpg" ratio="1" preTransform="flip=x" />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="/football.jpg" focus="auto" />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="football.jpg" ratio="none" style={styles.customImage} />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="/football.jpg" focus="auto" mode="contain" />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg
                            src="components/flip/orange-1.jpg"
                            focus="auto"
                            mode="contain"
                            ratio="4/3"
                            anchor="bottom left"
                        />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg
                            src="https://assets.twicpics.com/examples/football.jpg"
                            anchor="bottom left"
                        />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="football.jpg" focus="0px0p" />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="football.jpg" style={styles.customImage} />
                    </View>
                    <View style={styles.imgContainer}>
                        <TwicImg src="football.jpg" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    imgContainer: {
        width: '100%',
        marginBottom: 20
    },
    customImage: {
        width: '50%',
        height: 100
    },
    container: {
        padding: 20
    }
});

export default Basic;
