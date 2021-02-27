import React from 'react'
import { Text, View, Image, StyleSheet, Button, Platform,TouchableOpacity } from 'react-native';
import Colors from '../constans/Color';

const ProductItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onViewDetails} imageUrl={props.image}>
        <View style={Platform.OS === 'android' ? styles.androidproduct : styles.iosproduct}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>

            {/* here toFixed is a javaScript function that is used to fixed the strings to two decimal places */}
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button color={Colors.primary} width="500%" title="View Details" onPress={props.onViewDetails} />
                <Button color={Colors.primary} title="To Cart" onPress={props.onAddToCart} />
            </View>
            </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    iosproduct: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        height: 300

    },
    androidproduct: {
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow:'hidden' 
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    details: {
        alignItems: 'center',
        height: '15%',
      padding:10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:25,
        height:'25%'
    }

})

export default ProductItem
