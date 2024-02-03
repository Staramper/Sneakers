import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./assets/nike_logo.png')} style={styles.image} />
      <Text style={styles.title}>U'R | Stile</Text>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Register</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: 'light',
    marginTop: -40,
    marginBottom: 150,
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 250,
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#fff',
    borderColor: '#000000',  // Color del borde
    borderWidth: 2,         // Ancho del borde
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
