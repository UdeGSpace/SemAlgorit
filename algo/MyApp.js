import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Para Android
import Ionicons from 'react-native-vector-icons/Ionicons'; // Para iOS

import { API_KEY } from './utils/WeatherAPIKey';
import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: '',
    error: null,
    city: '',
    defaultMessage: 'Enter a city to get the weather',
    hasError: false,
  };

  handleCityChange = (city) => {
    this.setState({ city });
  };

  fetchWeather = () => {
    const { city } = this.state;
    if (city) {
      console.log(`Fetching weather data for city: ${city}`);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => {
          console.log('API response status:', res.status);
          return res.json();
        })
        .then(json => {
          console.log('API response JSON:', json);
          console.log(json.weather[0].main);
          if (json.cod === 200) {
            this.setState({
              weatherCondition: json.weather[0].main,
              temperature: json.main.temp,
              isLoading: false,
              error: null,
              hasError: false,
            },() => {
              console.log('State after setState:', this.state);
            });
          } else {
            this.setState({
              error: 'City not found',
              isLoading: false,
              hasError: true,
            });
          }
        })
        .catch(error => {
          console.log('Error fetching weather data:', error);
          this.setState({
            error: 'Error fetching weather data',
            isLoading: false,
            hasError: true,
          });
        });
    } else {
      this.setState({
        error: 'Please enter a city name',
        isLoading: false,
        hasError: true,
      });
    }
  };

  handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      this.fetchWeather();
    }
  };

  render() {
    const { isLoading, weatherCondition, temperature, error, city, defaultMessage, hasError } = this.state;
    
    if (hasError) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Something went wrong!</Text>
            <Text style={styles.errorMessage}>{error}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={() => this.setState({ hasError: false, isLoading: true })}>
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          {Platform.OS === 'ios' ? (
            <Ionicons name="ios-search" size={24} color="gray" style={styles.icon} /> // Ícono para iOS
          ) : (
            <MaterialIcons name="search" size={24} color="gray" style={styles.icon} /> // Ícono para Android
          )}
          <TextInput
            style={styles.input}
            placeholder="Enter city name"
            value={city}
            onChangeText={this.handleCityChange}
            onKeyPress={this.handleKeyPress}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.fetchWeather}>
          <Text style={styles.buttonText}>Get Weather</Text>
        </TouchableOpacity>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ff6347" />
            <Text style={styles.loadingText}>{defaultMessage}</Text>
          </View>
        ) : (
          weatherCondition ? ( // Verifica que weatherCondition no esté vacío
            <Weather weatherCondition={weatherCondition} temperature={temperature} />
          ) : (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>{defaultMessage}</Text>
            </View>
          )
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6347',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
  },
  loadingText: {
    fontSize: 20,
    color: '#666666',
    marginTop: 10,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffebee',
    borderRadius: 10,
    padding: 20,
  },
  errorTitle: {
    fontSize: 24,
    color: '#d32f2f',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 18,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#d32f2f',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
