import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Estilos = {

  textoTitulo: {
    alignSelf: 'center'
  }

}

const { textoTitulo } = Estilos;

const Rotas = () => (
  <Router>
    <Scene>
      <Scene key='Principal' component={Principal} title='Cara ou Coroa' titleStyle={textoTitulo} />
      <Scene key='SobreJogo' component={SobreJogo} title='Sobre o Jogo' />
      <Scene key='OutrosJogos' component={OutrosJogos} title='Outros Jogos' />
      <Scene key='Resultado' component={Resultado} title='Resultado' />
    </Scene>
  </Router>
);

export default Rotas;