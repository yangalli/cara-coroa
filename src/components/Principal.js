import React from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Estilos = {

  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },

  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

}

const logo = require('../../assets/logo.png');
const botaoJogar = require('../../assets/botao_jogar.png');
const sobreJogo = require('../../assets/sobre_jogo.png');
const outrosJogos = require('../../assets/outros_jogos.png');

export default class Principal extends React.Component {
  render() {
    const { cenaPrincipal, apresentacaoJogo, footer } = Estilos;
    return (
      <View style={cenaPrincipal}>

        <StatusBar hidden={true} />
        
        <View style={apresentacaoJogo}>
          <Image source={logo} />

          <TouchableOpacity onPress={() => Actions.Resultado() }>
            <Image source={botaoJogar} />
          </TouchableOpacity>
          
        </View>

        <View style={footer}>

          <TouchableOpacity onPress={() => Actions.SobreJogo() }>
            <Image source={sobreJogo} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.OutrosJogos() }>
            <Image source={outrosJogos} />
          </TouchableOpacity>
          
        </View>
        
      </View>
    );
  }
}