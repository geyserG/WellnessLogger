import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {styles} from '../globalStyles';
const imageRadio = require('../src/assets/images/Componente-13-112.png');
const imageRadioChecked = require('../src/assets/images/Componente-13-110.png');
class InputRadio extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        selected: ''
    };
    this.options = this.props.options || [];
    // this.handdlePress = this.handdlePress.bind(this);
  }
  options = [];
  handdlePress = (key) => {
      this.setState(state => ({
        selected: key
      }));
      this.props.onChange(key);
  }
  setImageRadio = (key) => {
    if (this.state.selected === key) {
        return <Image source={imageRadioChecked} style={localStyles.imageRadio} />
    } else {
        return <Image source={imageRadio} style={localStyles.imageRadio} />
    }
  }

  render() {
    const {props, state} = this;
    return (<>
        {this.options.map((option, key) => {
            return <TouchableOpacity key={key} onPress={() => this.handdlePress(option.key)} style={localStyles.container}>
                {this.setImageRadio(option.key)}
                <Text style={styles.p}>{option.text} {state.checked}</Text>
          </TouchableOpacity>
        })}
    </>);
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