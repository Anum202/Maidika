import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import ButtonComponent from '../components/ButtonComponent';

const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/Maidika.png')}
            />
            <TouchableOpacity style={styles.btnContainer1} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textStyle}>S'inscrire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer2} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textStyle}>Se Connecter</Text>
            </TouchableOpacity>
            {/* <ButtonComponent>S'inscrire</ButtonComponent>
            <ButtonComponent>Se Connecter</ButtonComponent> */}

        </View>
    );
}
export default OnboardingScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer1: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.06,
        borderRadius: windowWidth * 0.02,
        backgroundColor: Colors.blue,
        marginTop: windowHeight * 0.05,
        paddingTop: windowHeight * 0.015,
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    btnContainer2: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.06,
        borderRadius: windowWidth * 0.02,
        backgroundColor: Colors.teal,
        marginVertical: windowHeight * 0.03,
        paddingTop: windowHeight * 0.015,
    },
});