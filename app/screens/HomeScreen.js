import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicacion, soy Genoveva</Text>
        <Text>Hoy es un buen día para programar</Text>


        <View style={styles.botones}>

            <TouchableOpacity style={styles.boton1}
                onPress={() => {
                    navigation.navigate("PhoneNumberNav");
                }}
            >
                <Text style={styles.textoBoton}>CONTACTS</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.boton2}
                onPress={() => {
                    navigation.navigate("ProductNavigation");
                }}
            >
                <Text style={styles.textoBoton}>PRODUCTOS</Text>
            </TouchableOpacity>

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {
        backgroundColor: '#C10FED',
        marginRight: 60,
        padding: 10,
        alignItems: 'center',
    },
    boton2: {
        backgroundColor: '#C10FED', // Cambia esto al color que prefieras
        padding: 10,
        alignItems: 'center',
    },
    textoBoton: {
        color: '#fff', // Cambia esto al color que prefieras para el texto
    },
});
