import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/nike_logo.png')} style={styles.image} />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.busqueda}
          placeholder=" Buscar..."
          placeholderTextColor="#888"
        />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Image
            source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/337267c0-d8e6-483d-bd8f-21a59678482a/calzado-air-jordan-legacy-312-low-psg-kNMvnD.png' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Air Jordan Legacy 312 Low PSG</Text>
          <Text style={styles.texto}>$3,399</Text>
          <Image
            source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/yolsgjl5vhbgjt6v1jfl/calzado-air-jordan-legacy-312-low-mpV0mH.png' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Air Jordan Legacy 312 Low</Text>
          <Text style={styles.texto}>$3,499</Text>
          <Image
            source={{ uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03722903-962f-44d9-bb69-a95c35c0ed1b/calzado-air-jordan-1-zoom-cmft-2-3RDWz4.png' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Air Jordan 1 Zoom CMFT 2</Text>
          <Text style={styles.texto}>$3,599</Text>
          <Image
            source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31b6d072-9844-4553-bd5d-92beed6038e1/calzado-air-jordan-1-retro-high-og-yellow-ochre.png   ' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Air Jordan 1 Retro High OG "Yellow Ochre"</Text>
          <Text style={styles.texto}>$4,499</Text>
          <Image
            source={{ uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/64a18c64-72f1-4e28-acfb-18df3d0b6597/calzado-jordan-stay-loyal-3-MrJJXG.png' }}
            style={styles.imagen}
          />
          <Text style={styles.titulotexto}>Jordan Stay Loyal 3</Text>
          <Text style={styles.texto}>$2,899</Text>
        </ScrollView>
      </View>
      <View style={styles.barranav}>
        <TouchableOpacity onPress={() => {}}>
        <Image source={require('./assets/home.png')} style={styles.iconoNavegacion} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <Image source={require('./assets/carrito.png')} style={styles.iconoNavegacion} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <Image source={require('./assets/camion.png')} style={styles.iconoNavegacion} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <Image source={require('./assets/user.png')} style={styles.iconoNavegacion} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBar: {
    flex: 1,
    borderBottomWidth: 1,
  },
  busqueda: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    marginBottom: 30,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: -15,
    alignSelf: 'center', // Centra verticalmente
  },
  titulotexto: {  
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto: {
    color: 'black',
    marginBottom: 35,
  },
  barranav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  iconoNavegacion: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});

export default MainScreen;
