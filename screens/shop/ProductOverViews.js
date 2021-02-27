import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector,useDispatch } from 'react-redux'

import ProductItem from '../../components/ProductItem';
import * as cartActions from '../../store/actions/actionCart';

const ProductOverViews = props => {
    const product = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const renderProductItem = (itemData) => {
        return (
            <ProductItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onViewDetails={() => {
                    props.navigation.navigate('ProductDetailsScreen',{ productId:itemData.item.id,productImg:itemData.item.imageUrl })
                }}
                onAddToCart={() => {
                    props.navigation.navigate('CartScreen'),
                    dispatch(cartActions.addToCart(itemData.item))
                 }}
            />
        );
    }  

    return (
        <FlatList data={product} keyExtractor={item => item.id} renderItem={renderProductItem} />
    )
}

export default ProductOverViews;
