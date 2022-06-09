import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from "react-native";

const App = () => {

  const [numero, setNumero] = useState(0)

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 11)

    setNumero(novo_numero)
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.number}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffc0cb',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 45,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#cc006a',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }
})