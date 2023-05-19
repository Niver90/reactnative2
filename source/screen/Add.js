import React, { useState } from 'react'
import { Text,View , TextInput,StyleSheet ,Button} from 'react-native';
import {baseDatos} from "../config/firebase";
import { collection,addDoc } from 'firebase/firestore';
import {useNavigation} from "@react-navigation/native";

const Add = () => {
    const navigation = useNavigation();
    const [newObjet,setNewObjet] = useState({
        nombre:"",
        imagen:"🛒",
        descripcion:"",
        precio:0,
        vendido:false,
        creadoEn: new Date()
    });


const enviar = async () => {
    await addDoc(collection(baseDatos,"objetos"),newObjet);
    navigation.goBack();
}

   return (
    <View style={styles.container}>
        <Text style={styles.title}>Agregar objeto</Text>
        <Text style={styles.imagen}>{newObjet.imagen}</Text>
        <TextInput style={styles.inputContainer} placeholder='nombre'  onChangeText={ (text) => setNewObjet({...newObjet, nombre:text})}/>
        <TextInput 
            style={styles.inputContainer} 
            placeholder='Descripción' 
            onChangeText={(text) => setNewObjet({...newObjet, descripcion:text})} />
            <TextInput 
            style={styles.inputContainer} 
            placeholder='$ Precio' 
            keyboardType='number-pad' 
            onChangeText={(text) => setNewObjet({...newObjet, precio:text})} />
            <Button title='Guardar' onPress={enviar}/>
            <Text style={styles.print_text}>{JSON.stringify(newObjet)}</Text>
    </View>
  )
}

export default Add;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
        marginTop:10,
        marginBottom:30
    },
    print_text: {
        fontSize: 14,
        fontWeight: '700',
        marginTop:10,
        marginBottom:30
    },
    imagen:{
        fontSize:100,
        borderWidth:1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginVertical: 6,
        marginBottom:30
        
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
    }
})