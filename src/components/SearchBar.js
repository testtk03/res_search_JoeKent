import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const SearchBar = (props) => {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" style={styles.iconStyle}/>
            <TextInput 
                placeholder="Search"
                style = {styles.inputStyle}
                value={props.search}
                onChangeText = {(newSearch) => props.onSearch(newSearch)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => {props.onSubmit()}}
            />
            {props.search.length != 0
            ? (<TouchableOpacity
                onPress={()=>props.onClear()}
            >
                <MaterialIcons name="cancel" style={styles.cancelStyle} />
            </TouchableOpacity>) 
            : null}
            
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "rgb(240,238,238)",
        height: 50,
        borderRadius: 7,
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
        marginRight: 10
    },
    iconStyle:{
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    cancelStyle: {
        fontSize:25,
        color: 'grey',
        alignSelf: 'center',
        marginVertical: 12,
        marginRight: 12
    }
});

export default SearchBar;