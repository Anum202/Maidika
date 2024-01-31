import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import TextInputComponent from '../components/TextInputComponent';
import CheckboxWithText from '../components/CheckboxWithText';

const LoginScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [email, onChangeEmail] = useState('');
    const [pass, onChangePass] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/images/Maidika-logo.png')}
                    style={styles.logoStyles}
                />
                <Text style={styles.headingTextStyles}>Connexion</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.subHeadingTextStyles}>Compte personnel:</Text>
                <View>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInputComponent
                        placeholder='Entrez votre email'
                        autocapitalize='none'
                        keyboardType='email-address'
                        secureTextEntry={false}
                        value={email}
                        onChangeText={onChangeEmail}
                        style={styles.inputField}
                    />
                </View>
                <View >
                    <Text style={styles.labelText}>Mot de passe:</Text>
                    <TextInputComponent
                        placeholder='Entrez votre mot de passe '
                        autocapitalize='words'
                        keyboardType='default'
                        secureTextEntry={true}
                        value={pass}
                        onChangeText={onChangePass}
                        style={styles.inputField}
                    />
                </View>
                <CheckboxWithText isChecked={rememberMe} onPress={() => setRememberMe(!rememberMe)} />
                <TouchableOpacity style={styles.btnContainer} >
                    <Text style={styles.textStyle}>Se Connecter</Text>
                </TouchableOpacity>
                <View style={styles.signupTextContainer}>
                    <Text style={styles.signupText}>Vous n'avez pas encore de compte?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={[styles.signupText, styles.signupLink]}>Inscrivez-vous ici</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.connectTextContainer}>
                    <Text style={styles.connectText}>Connecte-toi avec:</Text>
                    <View style={styles.socialIconsContainer}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/facebook.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/twitter.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default LoginScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        width: windowWidth,
        height: windowHeight * 0.3,
        backgroundColor: Colors.blue,
    },
    logoStyles: {
        marginTop: windowHeight * 0.08,
        marginHorizontal: windowWidth * 0.4
    },
    headingTextStyles: {
        fontSize: 30,
        color: 'white',
        marginTop: windowHeight * 0.04,
        textAlign: 'center',
    },
    bodyContainer: {

    },
    subHeadingTextStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: windowHeight * 0.04,
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: windowWidth * 0.06,
        marginTop: windowHeight * 0.03,
    },
    inputField: {
        fontSize: 14,
    },
    btnContainer: {
        width: windowWidth * 0.5,
        height: windowHeight * 0.06,
        borderRadius: windowWidth * 0.02,
        backgroundColor: Colors.blue,
        marginVertical: windowHeight * 0.03,
        marginHorizontal: windowWidth * 0.25,
        paddingTop: windowHeight * 0.015,
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    signupTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    signupText: {
        fontSize: 12,
    },
    signupLink: {
        color: Colors.blue,
        marginLeft: 5,
    },
    connectTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    connectText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    socialIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
});