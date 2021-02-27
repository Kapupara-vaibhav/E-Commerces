import React from 'react'
import { ScrollView, Text, View, Image, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as cartItem from '../../store/actions/actionCart';
import Color from '../../constans/Color';

const ProductDetaisScreen = (props, { navigation ,route}) => {

    const availablePro = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const productId = props.route.params.productId;
    const selectedProduct = availablePro.find(prod => prod.id === productId);
    console.log(selectedProduct.title);
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.action}>
                <Button color={Color.primary} title="Add to Cart" onPress={() => {
                    dispatch(cartItem.addToCart(selectedProduct))
                }} />
            </View>
            <Text style={styles.price}>${ selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.desp}>{ selectedProduct.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height:300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical:20
    },
    desp:{
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal:20
    },
    action: {
        marginVertical: 10,
        alignItems:'center'
    }
})

export default ProductDetaisScreen
