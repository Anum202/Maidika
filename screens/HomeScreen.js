import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Alert, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import GlobalData from '../utils/GlobalData';

const HomeScreen = () => {
    const navigation = useNavigation();
    const user = GlobalData?.user;
    const [toggle, setToggle] = useState(false);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        fetchCurrentDate();
    }, []);

    const fetchCurrentDate = () => {
        const date = new Date();
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const month = months[monthIndex];
        const formattedDate = `${day} ${month}`;
        setCurrentDate(formattedDate);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleLogout = () => {
        GlobalData.user = null;
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleLogout}>
                    <Image
                        source={require('../assets/images/deconnection.png')}
                        style={styles.image}
                    />
                    <Text>Déconnexion</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/Maidika2.png')}
                        style={[styles.image, styles.secondImage]}
                    />
                    <Switch
                        trackColor={{ true: Colors.blue, true: "#767577" }}
                        thumbColor={toggle ? Colors.teal : Colors.blue}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleToggle}
                        value={toggle}
                    />
                </View>
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.leftProfile}>
                    <Text style={styles.nameData}>{user.name}, {user.fName}</Text>
                </View>
                <View style={styles.rightProfile}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.profileImage}
                    />

                    <TouchableOpacity style={styles.subRight} onPress={() => navigation.navigate('ModifyInformation')}>
                        <Text style={styles.profileText}>Mon Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.calendarContainer}>
                    <Text style={styles.calendarText}>Mercredi</Text>
                    <Text style={styles.calendarText}>{currentDate}</Text>
                </View>
                <View style={styles.med}>
                    <View style={styles.medEntry}>
                        <View style={styles.medImageContainer}>
                            <Image
                                source={require('../assets/images/aspirine.png')}
                                style={styles.medImage}
                            />
                        </View>
                        <View style={styles.medDetails}>
                            <Text style={styles.medName}>Aspirine</Text>
                            <Text style={styles.medDescription}>1 pilule</Text>
                            <Text style={styles.medAdditionalInfo}>10h00</Text>
                        </View>
                    </View>
                    <View style={styles.medEntry}>
                        <View style={styles.medImageContainer}>
                            <Image
                                source={require('../assets/images/doliprane.png')}
                                style={styles.medImage}
                            />
                        </View>
                        <View style={styles.medDetails}>
                            <Text style={styles.medName}>Doliprane</Text>
                            <Text style={styles.medDescription}>3 gelules</Text>
                            <Text style={styles.medAdditionalInfo}>19h00</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.leftContainer}>
                    <Image
                        source={require('../assets/images/add-photo.png')}
                    />
                    <View style={styles.leftBottomTextContainer}>
                        <Text style={styles.bottomText}>Scanner votre ordonnance</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightContainer}>
                    <Image
                        source={require('../assets/images/bell.png')}
                    />
                    <View style={styles.rightBottomTextContainer}>
                        <Text style={styles.bottomText}>Scanner votre ordonnance</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image
                    source={require('../assets/images/map.png')}
                    style={styles.mapStyles}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Trouver votre pharmacie</Text>
            </TouchableOpacity>
        </View>
    )
};
export default HomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: windowHeight * 0.04,
        height: 60,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
        alignSelf: 'center',
    },
    secondImage: {
        width: 70,
        height: 70,
        marginHorizontal: windowHeight * 0.099,
    },
    toggleButton: {
        width: 55,
        height: 40,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: windowHeight * 0.03,
    },
    leftProfile: {
        flex: 1,
    },
    rightProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: Colors.lightBlue,
        borderWidth: 0.5,
        backgroundColor: Colors.lightBlue,
        width: windowWidth * 0.6,
        height: windowHeight * 0.12,
    },
    nameData: {
        fontSize: 24,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: windowWidth * 0.04,
    },
    subRight: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: windowWidth * 0.25,
        height: windowHeight * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileText: {
        fontSize: 14,
    },
    calendarContainer: {
        flex: 1,
        backgroundColor: Colors.blueSecondary,
        width: windowWidth * 0.5,
        height: windowHeight * 0.17,
        borderRadius: 15,
    },
    calendarText: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',

    },
    med: {
        backgroundColor: 'white',
        width: windowWidth * 0.5,
        height: windowHeight * 0.17,
        borderRadius: 15,
    },
    medEntry: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 5,
    },
    medImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'lightgray',
    },
    medImage: {
        width: 25,
        height: 25,
    },
    medDetails: {
        flex: 1,
        marginLeft: 10,
    },
    medName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    medDescription: {
        fontSize: 11,
        marginTop: 2,
    },
    medAdditionalInfo: {
        fontSize: 11,
        color: 'gray',
        marginLeft: 80,
    },
    middleContainer: {

    },
    leftContainer: {
        flex: 1,
        backgroundColor: Colors.blueTertiaryLight,
        width: windowWidth * 0.5,
        height: windowHeight * 0.17,
        borderRadius: 15,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    rightContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.lightMustard,
        width: windowWidth * 0.45,
        height: windowHeight * 0.17,
        borderRadius: 15,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    leftBottomTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.blueTertiary,
        padding: 5,
    },
    rightBottomTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.mustard,
        padding: 5,
    },
    bottomText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
    },


    mapStyles: {
        width: 345,
        borderRadius: 15,
        marginHorizontal: windowWidth * 0.02,
        marginTop: windowHeight * 0.02,
    },
    btn: {
        backgroundColor: Colors.bluePrimary,
        borderRadius: 15,
        width: windowWidth * 0.9,
        height: windowHeight * 0.06,
        marginHorizontal: windowWidth * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        textAlign: 'center',

    }
});



