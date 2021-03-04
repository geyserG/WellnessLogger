import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AnswerLog from '../components/AnswerLog';
import ButtonBack from '../components/ButtonBack';
import {styles} from '../globalStyles';

class ScreenAnswerLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={localStyles.container}>
        <View style={[styles.container, localStyles.containerHead]}>
            <ButtonBack onPress={() => this.props.navigation.navigate('Track')}/>
            <Text style={[styles.h2, styles.bold, {fontSize: 32}]}> Answer Logs </Text>
        </View>
        <ScrollView style={[styles.container, localStyles.containerLogs]}>
            <AnswerLog /><AnswerLog /><AnswerLog />
        </ScrollView>
      </View>
    );
  }
}
export default ScreenAnswerLogs;

const localStyles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'flex-start', 
        flexDirection: 'column'
    },
    containerHead: {
        justifyContent: 'space-evenly',
        backgroundColor: '#f5f6fb',
        maxHeight: '25%',
    },
    containerLogs: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopColor: '#c8c8c8',
        borderWidth: 1,
    }
});