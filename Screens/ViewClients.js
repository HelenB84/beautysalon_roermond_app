import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Button} from "react-native";
import ClientCard from "../Components/ClientCard";
import clientApi from "../apis/ClientApi";

const ViewClients = ({navigation}) => {

    const [client, setClient] = useState([]);

    useEffect(() => {
        getClientsFromApi()
    }, [])

        function getClientsFromApi() {
            clientApi.get('https://randomuser.me/api/?results=5')
                .then(async function (response) {
                    setClient(response.data);
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

        if (!client) {
            return null
        }


    return (
        <View>
            <FlatList data={client.results}
                      keyExtractor={(item, index) => 'key' + index}
                      renderItem={({item}) => {
                          return <ClientCard item ={item}/>
                      }}
            />
        </View>
    )
}

export default ViewClients