import { Button, StyleSheet, View } from 'react-native';
//import {Header} from '@twicpics/components-react-native';

const Divider = () => {
    return <View style={styles.divider} />;
};
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Go to Single" onPress={() => navigation.navigate('Single')} />
            <Divider />
            <Button title="Go to Basic" onPress={() => navigation.navigate('Basic')} />
            <Divider />
            <Button title="Go to Gallery" onPress={() => navigation.navigate('Gallery')} />
            <Divider />
            <Button title="Go to Flatlist" onPress={() => navigation.navigate('Flatlist')} />
            <Divider />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    divider: {
        height: 12
    }
});

export default Home;
