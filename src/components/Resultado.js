import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';

const moedaCara = require('../../assets/moeda_cara.png');
const moedaCoroa = require('../../assets/moeda_coroa.png')

const Estilos = {

  resultado: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  }

}

export default class Resultado extends React.Component {

  constructor(props) {
    super(props);

    this.state = { resultado: '' };
  }

  componentWillMount () {
    const numeroAleatorio = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';
    
    if (numeroAleatorio === 0) {
      caraOuCoroa = 'cara';
    }
    else{
      caraOuCoroa = 'coroa';
    }

    this.setState({ resultado: caraOuCoroa });;
  };

  render() {
    const { resultado } = Estilos;
    if (this.state.resultado === 'cara') {
      return (
        <View style={resultado}>
          <Image source={moedaCara} />
        </View>
      );
    }
    else{
      return (
        <View style={resultado}>
          <Image source={moedaCoroa} />
        </View>
      );
    }
  }
} 