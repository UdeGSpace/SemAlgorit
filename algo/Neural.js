import { SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React, { Component } from 'react';

export default class Neural extends Component {
  constructor(props) {
    super(props);
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
      selectedField: '', // Campo seleccionado
    };
  }

  handleInputChange = (field, value) => {
    let newValue = value;

    if (field === 'id_' || field === 'posicion_x' || field === 'posicion_y' || field === 'red' || field === 'green' || field === 'blue') {
      newValue = parseInt(value, 10) || 0; // Enteros
    } else if (field === 'voltaje') {
      newValue = parseFloat(value) || 0.0; // Flotante
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
    // No deseleccionar inmediatamente, permitimos seguir interactuando con el campo
    setTimeout(() => {
      this.setState({ selectedField: '' });
    }, 100);
  };

  handleSave = () => {
    // Función para manejar la acción de guardar
    alert('Valores guardados:\n' + JSON.stringify(this.state.neuron, null, 2));
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
                  keyboardType="numeric"
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

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={this.handleSave}>
              <Text style={styles.saveButtonText}>Guardar</Text>
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
    backgroundColor: '#000000', // Fondo negro
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#00FF00', // Verde brillante
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace', // Estilo de fuente de terminal
  },
  formContainer: {
    borderColor: '#00FF00',
    borderWidth: 2,
    borderRadius: 10, // Borde redondeado
    padding: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001a00', // Fondo oscuro para los inputs
    borderColor: '#00FF00', // Bordes verdes brillantes
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
    color: '#000000', // Invertir a negro cuando está seleccionado
  },
  input: {
    flex: 1,
    color: '#00FF00',
    fontSize: 16,
    fontFamily: 'monospace',
    paddingVertical: 5,
    backgroundColor: '#001a00', // Color de fondo oscuro del campo
  },
  selectedRow: {
    backgroundColor: '#00FF00', // Fondo verde brillante cuando está seleccionado
    borderColor: '#000000', // Borde negro cuando está seleccionado
  },
  selectedInput: {
    backgroundColor: '#00FF00', // Invertir fondo del campo de texto a negro cuando está seleccionado
    color: '#000000', // Texto verde cuando está seleccionado
  },
  saveButton: {
    backgroundColor: '#00FF00', // Botón verde
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#000000', // Texto negro para el botón
    fontSize: 18,
    fontFamily: 'monospace',
  },
});
