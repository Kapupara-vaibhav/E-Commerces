import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import Color from '../../constans/Color'
import {useSelector} from 'react-redux'

const CartScreen = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <View style={styles.screen}>
            <View style={Platform.OS=='android'? styles.summaryforAndroid:styles.summaryforIOS}>
                <Text style={styles.summaryText}>
                    Total:<Text style={styles.amount}>${cartTotalAmount}</Text>
                </Text>
                <Button title="Order Now"/>
            </View>
            <View>
                <Text>CART ITEMS</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        margin:20
    },
    summaryforIOS: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor:'white',
        
    },
    summaryforAndroid: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        elevation: 5,
        borderRadius: 10,
        backgroundColor:'white',
        
    },
    summaryText: {
        fontSize:18,
    },
    amount: {
        color:Color.accent
    }
});

export default CartScreen
