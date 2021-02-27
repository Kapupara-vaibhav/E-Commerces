import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import ProductOverViews from '../screens/shop/ProductOverViews';
import Color from '../constans/Color';
import CartScreen from '../screens/shop/CartScreen';
import ProductDetaisScreen from '../screens/shop/ProductDetailsScreen';


export default function ProductNavigator({ navigation, route }) {
    const stack = createStackNavigator();
    const availablePro = useSelector(state => state.products.availableProducts);
    
    const headerTitleId = (route) => {
        const productId = route.params.productId;
        const selectedProduct=availablePro.find(prod=>prod.id===productId)
        return selectedProduct.title;
    }

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="ProductOverview" component={ProductOverViews}
                    options={{
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
                        },
                        headerTitle: "Products",
                        headerTintColor: Platform.OS === 'android' ? "white" : Color.primary,
                        headerRight: () => <MaterialIcons name='add-shopping-cart' size={32} color='white' style={styles.headericon} onPress={()=>CartScreen()}/>
                    }} />
                <stack.Screen name="ProductDetailsScreen" component={ProductDetaisScreen} options={
                    ({ route }) => ({
                        headerTitle: headerTitleId(route),
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : Color.primary,

                    })
                } />
                <stack.Screen name="CartScreen" component={CartScreen} options={
                    ({ route }) => ({
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : Color.primary,
                    })
                } />
            </stack.Navigator>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
    headericon: {
        marginRight: 15,
        backgroundColor: Platform.OS === 'android' ? Color.primary : '' 
    }
})