import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TwicImg from '../components/TwicImg.js';
//import {TwicImg} from '@twicpics/components-react-native';

const Single = () => {
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imgContainer}>
                        <TwicImg src="cat_1x1.jpg" ratio="16/9" mode="cover" />
                    </View>
                    <Text>After</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    imgContainer: {
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

export default Single;
