import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { baseDatos } from '../config/firebase';

const Products = ({ id, imagen, nombre, descripcion, precio, vendido }) => {

  const updateByid = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    updateDoc(docRef, {
        vendido: true,
    });
  };

  const deleteByid = () => {
    const docRef = doc(baseDatos, "objetos", id);
    deleteDoc(docRef);
  };

  return (
    <View style={styles.objetoContainer}>
      <View style={styles.conEliminar}>
        <Text style={styles.imagen}>{imagen}</Text>
      </View>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
      <Text style={styles.precio}>${precio}</Text>
      {vendido ? (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button}>Cargado</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={updateByid}>
            <Text style={styles.buttonText}>Cargar</Text>
          </TouchableOpacity>
          <AntDesign style={styles.antedesing} onPress={deleteByid} name="delete" size={25} />
        </View>
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  objetoContainer: {
    flex: 1,
    backgroundColor: "#E0FFFF",
    alignItems: "center",
  },
  nombre: {
    fontSize: 34,
    fontWeight: "700",
  },
  descripcion: {
    fontSize: 20,
    fontWeight: "700",
  },
  antedesing: {
    marginTop: 10,
  },
  imagen: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  conEliminar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
    color: "#f0f",
    backgroundColor: "#ddd",
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
  },
});