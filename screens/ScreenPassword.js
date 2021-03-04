import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import {styles} from '../globalStyles';
import MyButton from '../components/MyButton';

class ViewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.h2, styles.bold]}>Create a Password</Text>
            <TextInput style={styles.textInput}></TextInput>
            <MyButton title="Lets Go!"/>
        </View>
    );
  }
}

export default ViewPassword;
