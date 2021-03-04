import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import {styles} from '../globalStyles';
import MyButton from '../components/MyButton';
const imageApp = require('../src/assets/images/Grupo-1509.png');

class ViewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={[styles.container, localStyles.container]}>
            <View style={{alignItems:'stretch'}}>
              <Image
                style={[styles.imageApp, {marginBottom: 21}]}
                source={imageApp}
              />
              <Text style={[styles.h2, styles.bold, styles.textCenter]}>Create a Password</Text>
              <TextInput 
              style={styles.textInput}
              autoCompleteTypeson="off"
              textContentType="password"
              secureTextEntry={true}
              placeholder="Password"/>
            </View>
            <MyButton title="Lets Go!" onPress={() => this.props.navigation.navigate('Track')}/>
        </View>
    );
  }
}

export default ViewPassword;

const localStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
});
