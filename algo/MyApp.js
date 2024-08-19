import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import React, { Component } from 'react';

export default class MyApp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.header}>Encabezado Grande</Text>
          <Text style={styles.subHeader}>Encabezado Medio</Text>
          <Text style={styles.smallText}>Texto Pequeño</Text>
          <Text style={styles.blueText}>Texto Azul</Text>
          <Text style={styles.redText}>Texto Rojo y Subrayado</Text>
          <Text style={styles.greenItalicText}>Texto Verde y Cursiva</Text>
          <Text style={styles.rightAlignedText}>Texto Alineado a la Derecha</Text>
          <Text style={styles.centerAlignedText}>Texto Centrado</Text>
          <Text style={styles.boldText}>Texto en Negrita</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Fondo claro opcional
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20, // Ajuste de margen superior adicional
  },
  header: {
    fontSize: 32, // Tamaño de fuente grande
    fontWeight: 'bold', // Negrita para un encabezado
    color: '#000', // Color de texto negro
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 24, // Tamaño de fuente medio
    fontWeight: '600', // Semi-negrita
    color: '#555', // Color de texto gris oscuro
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14, // Tamaño de fuente pequeño
    color: '#777', // Color de texto gris medio
    marginBottom: 10,
  },
  blueText: {
    fontSize: 20, // Tamaño de fuente medio
    color: 'blue', // Color de texto azul
    marginBottom: 10,
  },
  redText: {
    fontSize: 20, // Tamaño de fuente medio
    color: 'red', // Color de texto rojo
    textDecorationLine: 'underline', // Subrayado
    marginBottom: 10,
  },
  greenItalicText: {
    fontSize: 20, // Tamaño de fuente medio
    color: 'green', // Color de texto verde
    fontStyle: 'italic', // Cursiva
    marginBottom: 10,
  },
  rightAlignedText: {
    fontSize: 20, // Tamaño de fuente medio
    color: '#000', // Color de texto negro
    textAlign: 'right', // Alineado a la derecha
    alignSelf: 'stretch', // Abarca todo el ancho
    marginBottom: 10,
  },
  centerAlignedText: {
    fontSize: 20, // Tamaño de fuente medio
    color: '#000', // Color de texto negro
    textAlign: 'center', // Centrado
    marginBottom: 10,
  },
  boldText: {
    fontSize: 20, // Tamaño de fuente medio
    color: '#000', // Color de texto negro
    fontWeight: 'bold', // Negrita
    marginBottom: 10,
  },
});
