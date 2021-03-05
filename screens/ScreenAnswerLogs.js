import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AnswerLog from '../components/AnswerLog';
import ButtonBack from '../components/ButtonBack';
import {styles} from '../globalStyles';

class ScreenAnswerLogs extends Component {
  render() {
    const {props} = this;
    return (
      <View style={localStyles.container}>
        <View style={[styles.container, localStyles.containerHead]}>
            <ButtonBack onPress={() => props.navigation.navigate('New Logger')}/>
            <Text style={[styles.h2, styles.bold, {fontSize: 32}]}> Answer Logs </Text>
        </View>
        <ScrollView style={[styles.container, localStyles.containerLogs]}>
            <AnswerLog />
            <AnswerLog />
            <AnswerLog />
        </ScrollView>
      </View>
    );
  }
}
export default ScreenAnswerLogs;

const localStyles = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection: 'column',
        justifyContent:'flex-start', 
    },
    containerHead: {
        backgroundColor: '#f5f6fb',
        justifyContent: 'space-evenly',
        maxHeight: '25%',
    },
    containerLogs: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        paddingTop: 30
    }
});