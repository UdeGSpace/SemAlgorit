
import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Neurona from './models/neurona';
import AdministrarNeuronas from './controller/administrarNeuronas';

export default class Neural extends Component {
  constructor(props) {
    super(props);
    this.neuronasController = new AdministrarNeuronas();
    this.state = {
      neuron: {
        id_: 0,
        voltaje: 0.0,
        posicion_x: 0,
        posicion_y: 0,
        red: 0,
        green: 0,
        blue: 0,
      },
      selectedField: '',
    };

  }

  handleInputChange = (field, value) => {
    let newValue = value;

    if (['id_', 'posicion_x', 'posicion_y', 'red', 'green', 'blue'].includes(field)) {
      newValue = value === '' ? '' : parseInt(value, 10) || 0; // Mantener cadena vacía
    } else if (field === 'voltaje') {
      // Permitir que el campo sea un string temporalmente (incluyendo punto decimal)
      if (value === '' || value === '.' || /^-?\d*\.?\d*$/.test(value)) {
        newValue = value;
      }
    }

    this.setState((prevState) => ({
      neuron: {
        ...prevState.neuron,
        [field]: newValue,
      },
    }));
  };  

  handleFocus = (field) => {
    this.setState({ selectedField: field });
  };

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ selectedField: '' });
    }, 100);
  };

  // Función para manejar el guardado en el controlador
  handleAddAtStart = () => {
    const nuevaNeurona = new Neurona(
      this.state.neuron.id_,
      this.state.neuron.voltaje,
      this.state.neuron.posicion_x,
      this.state.neuron.posicion_y,
      this.state.neuron.red,
      this.state.neuron.green,
      this.state.neuron.blue
    );
    this.neuronasController.agregarInicio(nuevaNeurona);
    alert('Neurona agregada al inicio');
    this.resetForm();
  };

  handleAddAtEnd = () => {
    const nuevaNeurona = new Neurona(
      this.state.neuron.id_,
      this.state.neuron.voltaje,
      this.state.neuron.posicion_x,
      this.state.neuron.posicion_y,
      this.state.neuron.red,
      this.state.neuron.green,
      this.state.neuron.blue
    );
    this.neuronasController.agregarFinal(nuevaNeurona);
    alert('Neurona agregada al final');
    this.resetForm();
  };

  // Mostrar todas las neuronas
  handleShowAll = () => {
    const neurons = this.neuronasController.listaNeuronas;
    alert(JSON.stringify(neurons)); // Simple alert to show neuron data. 
  };
    resetForm = () => {
      this.setState({
        neuron: {
          id_: 0,
          voltaje: 0.0,
          posicion_x: 0,
          posicion_y: 0,
          red: 0,
          green: 0,
          blue: 0,
        },
      });
    };
  
  render() {
    const { neuron, selectedField } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView>
        <Text style={styles.title}>Capturar Neurona</Text>

          <View style={styles.formContainer}>
            {/* ID Field */}
            <TouchableOpacity onPress={() => this.handleFocus('id_')}>
              <View style={[styles.inputContainer, selectedField === 'id_' && styles.selectedRow]}>
                <Text style={[styles.label, selectedField === 'id_' && styles.selectedLabel]}>ID:</Text>
                <TextInput
                  style={[styles.input, selectedField === 'id_' && styles.selectedInput]}
                  keyboardType="numeric"
                  value={neuron.id_.toString()}
                  onChangeText={(value) => this.handleInputChange('id_', value)}
                  onFocus={() => this.handleFocus('id_')}
                  onBlur={this.handleBlur}
                  placeholder="0"
                  placeholderTextColor="#00FF00"
                />
              </View>
            </TouchableOpacity>

            {/* Voltaje Field */}
            <TouchableOpacity onPress={() => this.handleFocus('voltaje')}>
              <View style={[styles.inputContainer, selectedField === 'voltaje' && styles.selectedRow]}>
                <Text style={[styles.label, selectedField === 'voltaje' && styles.selectedLabel]}>Voltaje:</Text>
                <TextInput
                  style={[styles.input, selectedField === 'voltaje' && styles.selectedInput]}
                  keyboardType="decimal-pad"
                  value={neuron.voltaje.toString()}
                  onChangeText={(value) => this.handleInputChange('voltaje', value)}
                  onFocus={() => this.handleFocus('voltaje')}
                  onBlur={this.handleBlur}
                  placeholder="0.0"
                  placeholderTextColor="#00FF00"
                />
              </View>
            </TouchableOpacity>

            {/* Posicion X Field */}
            <TouchableOpacity onPress={() => this.handleFocus('posicion_x')}>
              <View style={[styles.inputContainer, selectedField === 'posicion_x' && styles.selectedRow]}>
                <Text style={[styles.label, selectedField === 'posicion_x' && styles.selectedLabel]}>Posición X:</Text>
                <TextInput
                  style={[styles.input, selectedField === 'posicion_x' && styles.selectedInput]}
                  keyboardType="numeric"
                  value={neuron.posicion_x.toString()}
                  onChangeText={(value) => this.handleInputChange('posicion_x', value)}
                  onFocus={() => this.handleFocus('posicion_x')}
                  onBlur={this.handleBlur}
                  placeholder="0"
                  placeholderTextColor="#00FF00"
                />
              </View>
            </TouchableOpacity>

            {/* Posicion Y Field */}
            <TouchableOpacity onPress={() => this.handleFocus('posicion_y')}>
              <View style={[styles.inputContainer, selectedField === 'posicion_y' && styles.selectedRow]}>
                <Text style={[styles.label, selectedField === 'posicion_y' && styles.selectedLabel]}>Posición Y:</Text>
                <TextInput
                  style={[styles.input, selectedField === 'posicion_y' && styles.selectedInput]}
                  keyboardType="numeric"
                  value={neuron.posicion_y.toString()}
                  onChangeText={(value) => this.handleInputChange('posicion_y', value)}
                  onFocus={() => this.handleFocus('posicion_y')}
                  onBlur={this.handleBlur}
                  placeholder="0"
                  placeholderTextColor="#00FF00"
                />
              </View>
            </TouchableOpacity>

            {/* Red Field */}
            <TouchableOpacity onPress={() => this.handleFocus('red')}>
              <View style={[styles.inputContainer, selectedField === 'red' && styles.selectedRow]}>
                <Text style={[styles.label, selectedField === 'red' && styles.selectedLabel]}>Roja:</Text>
                <TextInput
                  style={[styles.input, selectedField === 'red' && styles.selectedInput]}
                  keyboardType="numeric"
                  value={neuron.red.toString()}
                  onChangeText={(value) => this.handleInputChange('red', value)}
                  onFocus={() => this.handleFocus('red')}
                  onBlur={this.handleBlur}
                  placeholder="0"
                  placeholderTextColor="#00FF00"
                />
              </View>
            </TouchableOpacity>

            {/* Green Field */}
            <TouchableOpacity onPress={() => this.handleFocus('green')}>
              <View style={[styles.inputContainer, selectedField === 'green' && styles.selectedRow]}>
                <Text style={[styles.label, selectedField === 'green' && styles.selectedLabel]}>Verde:</Text>
                <TextInput
                  style={[styles.input, selectedField === 'green' && styles.selectedInput]}
                  keyboardType="numeric"
                  value={neuron.green.toString()}
                  onChangeText={(value) => this.handleInputChange('green', value)}
                  onFocus={() => this.handleFocus('green')}
                  onBlur={this.handleBlur}
                  placeholder="0"
                  placeholderTextColor="#00FF00"
                />
              </View>
            </TouchableOpacity>

            {/* Blue Field */}
            <TouchableOpacity onPress={() => this.handleFocus('blue')}>
              <View style={[styles.inputContainer, selectedField === 'blue' && styles.selectedRow]}>
                <Text style={[styles.label, selectedField === 'blue' && styles.selectedLabel]}>Azul:</Text>
                <TextInput
                  style={[styles.input, selectedField === 'blue' && styles.selectedInput]}
                  keyboardType="numeric"
                  value={neuron.blue.toString()}
                  onChangeText={(value) => this.handleInputChange('blue', value)}
                  onFocus={() => this.handleFocus('blue')}
                  onBlur={this.handleBlur}
                  placeholder="0"
                  placeholderTextColor="#00FF00"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={this.handleAddAtStart}>
              <Text style={styles.addButtonText}>Agregar al Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addButton} onPress={this.handleAddAtEnd}>
              <Text style={styles.addButtonText}>Agregar al Final</Text>
            </TouchableOpacity>
            {/* Botón para mostrar todas las neuronas */}
            <TouchableOpacity style={styles.addButton} onPress={this.handleShowAll}>
              <Text style={styles.addButtonText}>Mostrar Todas</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#00FF00',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  formContainer: {
    borderColor: '#00FF00',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001a00',
    borderColor: '#00FF00',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  label: {
    color: '#00FF00',
    fontFamily: 'monospace',
    fontSize: 18,
    marginRight: 10,
  },
  selectedLabel: {
    color: '#000000',
  },
  input: {
    flex: 1,
    color: '#00FF00',
    fontSize: 16,
    fontFamily: 'monospace',
    paddingVertical: 5,
    backgroundColor: '#001a00',
  },
  selectedRow: {
    backgroundColor: '#00FF00',
    borderColor: '#000000',
  },
  selectedInput: {
    backgroundColor: '#00FF00',
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#00FF00',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'monospace',
  },
});
