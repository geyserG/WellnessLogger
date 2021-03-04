import React, { Component } from 'react';
import {  StyleSheet, View, Text, Image } from 'react-native';
import {styles} from '../globalStyles';
import MyButton from '../components/MyButton';
const imageHr = require('../src/assets/images/Linea-56.png');
const imageHeader = require('../src/assets/images/Grupo-660.png');

class ScreenTrackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alignItemsCenter}>
            <Image
            style={[localStyles.imageHeader, styles.alignItemsCenter]}
            source={imageHeader}
            />
        </View>
        <Text style={[styles.h2, styles.textCenter]}>Track your wellness</Text>
        <Image
        style={styles.imageHr}
        source={imageHr}
        />
        <View>
            <Text style={styles.h3}>How do you feel?</Text>
            <Text style={styles.p}>Perfect, thank you!</Text>
            <Text style={styles.p}>Meh, I'm alive</Text>
            <Text style={styles.p}>Worst day even</Text>
        </View>
        <Image
        style={styles.imageHr}
        source={imageHr}
        />
      </View>
    );
  }
}

export default ScreenTrackForm;

const localStyles = StyleSheet.create({
    imageHeader: {
        width: 151.18,
        height: 117.25,
        marginBottom: 8
    }
});