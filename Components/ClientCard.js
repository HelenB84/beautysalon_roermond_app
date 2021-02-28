import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

const ClientCard =({item}) => {
    console.log(item)
    return(
        <View style={styles.cardView}>
            <Image style={styles.image} source={{uri:item.picture.large}}/>
            <Text style={styles.firstName}>Voornaam: {item.name.first}</Text>
            <Text style={styles.lastName}>Achternaam: {item.name.last}</Text>
            <Text style={styles.address}>Straatnaam: {item.location.street.name}</Text>
            <Text style={styles.address}>Huisnummer: {item.location.street.number}</Text>
            <Text style={styles.address}>Postcode: {item.location.postcode}</Text>
            <Text style={styles.address}>Plaatsnaam: {item.location.city}</Text>
            <Text style={styles.email}>Email: {item.email}</Text>
            <Text style={styles.phone}>Telefoonnr: {item.phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: width *0.05,
        shadowColor: "#648081",
        shadowOffset:{width:0, height:1},
        shadowOpacity:0.8,
        shadowRadius: 1

    },
    image: {
        // width:width,
        height:height/4,
        marginLeft:width * 0.1,
        marginRight: width * 0.1,
        marginVertical: height * 0.05,
        borderRadius: 20

    },
    firstName: {
        width:width,
        margin: width *0.05,
        marginBottom:height * 0.01,
        color: "#648081",
        fontSize: 16
    },
    lastName: {
        width:width,
        margin: width *0.05,
        marginBottom:height * 0.01,
        color: "#648081",
        fontSize: 16

    },
    address: {
        width:width,
        margin: width *0.05,
        marginBottom:height * 0.01,
        color: "#648081",
        fontSize: 16

    },
    email: {
        width:width,
        margin: width *0.05,
        marginBottom:height * 0.01,
        color: "#648081",
        fontSize: 16
    },
    phone: {
        width:width,
        margin: width *0.05,
        marginBottom:height * 0.01,
        color: "#648081",
        fontSize: 16
    }
})

export default ClientCard