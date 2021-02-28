import {Button, Image, Text, View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";

export default function Homescreen({navigation}){
    return(<View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.jpg")}/>
            <Text style={styles.text1}>Welkom bij MOOI BY ILSE</Text>
            <Text style={styles.text2}>Telefoonnr: +3161234567</Text>
            <Text style={styles.text2}>Emailadres: info@mooibyilse.nl</Text>
            <Button color='#648081' onPress={() => navigation.navigate('ViewClients')} title="Ga naar klanten"/>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 90,
        marginBottom: 25,
    },

    text1:{
        marginBottom: 25,
        fontWeight: "500"
    },

    text2:{
        fontWeight: "500",
    }
});