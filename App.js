import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      numero:5,
    }
  }

  aumentar = () => {
    this.setState({
      numero: this.state.numero+1
    });
  }

  restar = () => {
    this.setState({
      numero: this.state.numero-1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Inicio name='calculadora'/>
        <Body numero={ this.state.numero }/>
        <Final sumar={this.aumentar} restar={this.restar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});

export default App;