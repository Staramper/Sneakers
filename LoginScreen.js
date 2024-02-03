import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={(username) => this.setState({ username })}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Cambiado de 'start' a 'flex-start'
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 200,
  },
  labelContainer: {
    width: '80%', // Ancho del contenedor de etiquetas y entradas
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'light',
  },
  input: {
    height: 40,
    width: '100%', // Ancho del input al 100% del contenedor
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#000',
    borderColor: '#000000',  // Color del borde
    borderWidth: 2,         // Ancho del borde
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'light',
  },
});

export default LoginScreen;