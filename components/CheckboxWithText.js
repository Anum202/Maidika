import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const CheckboxWithText = ({ isChecked, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                    {isChecked && <Text style={styles.tick}>✓</Text>}
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>Rester connécté</Text>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 3,
        borderWidth: 0.5,
        marginTop: windowHeight * 0.02,
        marginHorizontal: windowWidth * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: Colors.blue,
    },
    tick: {
        color: 'white',
        fontSize: 14,
    },
    text: {
        fontSize: 16,
        marginTop: windowHeight * 0.02,
        color: Colors.lightGrey,
    },
});

export default CheckboxWithText;
