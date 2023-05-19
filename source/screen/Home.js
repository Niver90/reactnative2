import React, { useEffect, useState } from "react";
import { Text, Button, StyleSheet,View  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { baseDatos } from "../config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Products from "../components/Products";
const Home = () => {
  const navigation = useNavigation();
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Agregar"
          onPress={() => navigation.navigate("Agregar")}
        />
      ),
    });
  }, []);

  useEffect(() => {
    const collectionRef = collection(baseDatos, "objetos");
    const q = query(collectionRef, orderBy("creadoEn", "desc"));

    const desuscribir = onSnapshot(q, (querySnapshot) => {
      setObjetos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          imagen: doc.data().imagen,
          nombre: doc.data().nombre,
          descripcion: doc.data().descripcion,
          precio: doc.data().precio,
          vendido: doc.data().vendido,
          creadoEn: doc.data().creadoEn,
        }))
      );
    });
    return desuscribir;
  }, []);
  return (
   <>
     <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
    </View>
    {objetos.map((objeto) => (
        <Products key={objeto.id} {...objeto} />
      ))}
   </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#00008B',
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color:"white"
  },
});
