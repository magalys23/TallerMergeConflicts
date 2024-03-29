import { View, Text, StyleSheet, Button } from 'react-native'

export const Contacts = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Estoy en contact Magaly Chulde</Text>
        <Button
            title='HOME'
            onPress={() => {
                navigation.navigate('WellcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#afeeee',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
