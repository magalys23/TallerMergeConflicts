import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return (
      <View style={styles.container}>
        <Text>Bienvenido a mi tienda, Soy Juan</Text>
        <Text style={styles.productText1}>Audifonos</Text>
        <Text style={styles.productText2}>Escritorio</Text>
        <Text style={styles.productText3}>Monitores</Text>
        <Button
          title="HOME"
          onPress={() => {
            navigation.navigate("WellcomeNav");
          }}
        />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#556b2f",
    alignItems: "center",
    justifyContent: "center",
  },
  productText1: {
    color: "#6495ed",
  },
  productText2: {
    color: "#008080",
  },
  productText3: {
    color: "green",
  },
});