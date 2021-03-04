import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {styles} from '../globalStyles';
const imageRadio = require('../src/assets/images/Componente-13-112.png');
const imageRadioChecked = require('../src/assets/images/Componente-13-110.png');
class InputRadio extends PureComponent {
  constructor(props) {
    super(props);
    this.handdlePress = this.handdlePress.bind(this);
    this.state = {
        checked: false
    };
  }
  handdlePress = () => {
      this.setState(state => ({
        checked: !state.checked
      }))
  }
  setImageRadio = () => {
      if (this.state.checked === false) {
          return <Image source={imageRadio} style={localStyles.imageRadio} />
      } else {
          return <Image source={imageRadioChecked} style={localStyles.imageRadio} />
      }
  }

  render() {
    const {props, state} = this;
    return (
      <TouchableOpacity onPress={this.handdlePress} style={localStyles.container}>
        {this.setImageRadio()}
        <Text style={styles.p}>{props.text} {state.checked}</Text>
      </TouchableOpacity>
    );
  }
}

export default InputRadio;


const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 7.5,
        marginTop: 7.5
    },
    imageRadio: {
        marginEnd: 10
    }
});