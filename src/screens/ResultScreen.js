import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async(id) =>{
        try{
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        }
        catch(err)
        {

        }
        
    }

    useEffect(()=>{
        getResult(id);
    },[])

    if (!result) return null;

    return (
        <>
            <Text>{result.name}</Text>
            <FlatList
                data = {result.photos}
                keyExtractor = {photo=>photo}
                renderItem={({item})=>{
                    return <Image source = {{uri: item}} style={styles.imageStyle} />                   
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300
    }
})

export default ResultScreen;