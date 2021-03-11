import React from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ResultDetail = ({result}) => {
    const categories = result.categories;
    return (
        <View style = {styles.background}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}/>     
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style= {styles.name}>{result.name}</Text>
                <Text style={{alignSelf: 'flex-end'}}>{result.rating}/5</Text>
            </View>     
            <Text>{result.location.address1}, {result.location.city}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    imageStyle: {
        width: 250,
        borderRadius: 10,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15
    },
    background: {
        marginLeft: 15,
        
    }
})

export default ResultDetail;