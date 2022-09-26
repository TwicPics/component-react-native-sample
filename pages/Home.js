import { Button, StyleSheet, View } from 'react-native';

const Divider = () => {
    return <View style={styles.divider} />;
};
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Basic" onPress={() => navigation.navigate('Basic')} />
            <Divider />
            <Button title="Gallery" onPress={() => navigation.navigate('Gallery')} />
            <Divider />
            <Button title="Flatlist" onPress={() => navigation.navigate('Flatlist')} />
            <Divider />
            <Button title="Focus" onPress={() => navigation.navigate('Focus')} />
            <Divider />
            <Button title="Mode" onPress={() => navigation.navigate('Mode')} />
            <Divider />
            <Button title="Ratio" onPress={() => navigation.navigate('Ratio')} />
            <Divider />
            <Button title="Transform" onPress={() => navigation.navigate('Transform')} />
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
