/* 
Crie um aplicativo chamado Contador Restaurante que ajuda um restaurante a
contar o número de pessoas que entram e saem. O app deve ter dois botões: um
para incrementar o número de entradas e outro para decrementá-lo. O número
total de pessoas presentes no restaurante deve ser atualizado em tempo real.
*/

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [clientes, setClientes] = useState(0);

  const incrementar = () => {
    setClientes(clientes + 1);
  };

  const decrementar = () => {
    if (clientes > 0) {
      setClientes(clientes - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Clientes no Restaurante</Text>
      <Text style={styles.textoClientes}>{clientes}</Text>
      
      <TouchableOpacity style={styles.botao} onPress={incrementar}>
        <Text style={styles.textoBotao}>Entrou Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={decrementar}>
        <Text style={styles.textoBotao}>Saiu Cliente</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textoClientes: {
    fontSize: 48,
    marginBottom: 30,
    color: '#333',
  },
  botao: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
