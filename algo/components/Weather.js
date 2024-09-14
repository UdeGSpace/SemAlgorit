import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { weatherConditions } from '../utils/WeatherConditions'; // Ajusta la ruta según la estructura de tu proyecto

const Weather = ({ weatherCondition, temperature }) => {
  console.log('Weather component received weatherCondition:', weatherCondition);
  // Obtener la configuración para la condición del clima
  const weather = weatherConditions[weatherCondition] || weatherConditions.Clouds;

  return (
    <View style={[styles.weatherContainer, { backgroundColor: weather.color }]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name={weather.icon} color={'#fff'} />
        <Text style={styles.tempText}>Temperature</Text>
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weather.title}</Text>
        <Text style={styles.subtitle}>{weather.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    fontSize: 48,
    color: '#fff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Weather;
