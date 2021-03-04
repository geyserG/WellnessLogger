import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {styles} from '../globalStyles';
import MyButton from '../components/MyButton';
import InputRadio from '../components/InputRadio';
const imageHr = require('../src/assets/images/Linea-56.png');
const imageHeader = require('../src/assets/images/Grupo-660.png');

class ScreenTrackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  optionsAsk1 = [
    {
      key: 'option_1',
      text: "Perfect, thank you!"
    },
    {
      key: 'option_2',
      text: "Meh, I'm alive"
    },
    {
      key: 'option_3',
      text: "Worst day even"
    },
  ]
  optionsAsk2 = [
    {
      key: 'yes',
      text: 'Yes'
    },
    {
      key: 'no',
      text: 'No'
    }
  ]

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
            <Text style={[styles.h3, localStyles.textQuestion]}>How do you feel?</Text>
            <InputRadio options={this.optionsAsk1}/>
        </View>
        <Image
        style={styles.imageHr}
        source={imageHr}
        />
        <View>
            <Text style={[styles.h3, localStyles.textQuestion]}>Did you sleep well?</Text>
            <InputRadio options={this.optionsAsk2}/>
        </View>
        <Image
        style={styles.imageHr}
        source={imageHr}
        />
        <View style={styles.alignItemsCenter}>
          <MyButton title="Submit" style={styles.alignItemsCenter}/>
        </View>
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
    },
    textQuestion: {
      marginBottom: 7.5
    }
});