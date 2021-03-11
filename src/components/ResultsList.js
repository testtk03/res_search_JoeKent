import React from 'react';
import {Text, View, StyleSheet, FlatList,  TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({data, title, navigation}) => {
    if (!data.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data = {data}
                keyExtractor = {(result) => result.id}
                renderItem = {({item}) => {
                    return (
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('ResultShow', {id: item.id})}}>
                        <ResultDetail result = {item}/>
                    </TouchableOpacity>
                    )                       
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList);