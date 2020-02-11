import React from "react";
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: "#202040",
        borderWidth: 0.3,
        marginHorizontal: 15,
        flexDirection: "row",
        elevation: 2
    },

    inputStyle : {
        flex: 1,
        fontSize: 18
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;