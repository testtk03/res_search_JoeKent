import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';
import { MaterialIcons } from '@expo/vector-icons';


const SearchScreen = () => {

    const [search, setSearch] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    const filterByReview = () => {
        return results.filter(result => {
            return result.rating > 3.5 ;
        })
    }

    return (
        <>
            <SearchBar           
                onSearch={(newSearch) => setSearch(newSearch)} 
                search={search}
                onSubmit = {() => searchAPI(search)}
                onClear = {()=>{
                    setSearch('');
                    searchAPI('');
                }}
            />
            {errorMessage ? <Text styles={{padding:10}}>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList data = {filterByReview()} title = "Recommended" />
                <ResultsList data = {filterByPrice("€")} title = "Cheap"/>
                <ResultsList data = {filterByPrice("€€")} title = "Medium"/>
                <ResultsList data = {filterByPrice("€€€")} title = "Expensive" />
            </ScrollView>
            

        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;