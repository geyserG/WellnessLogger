import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
}                           from 'react-native';
import { StatusBar }        from 'expo-status-bar';
import {styles}             from '../globalStyles';
import MyButton             from '../components/MyButton';
const logo =                require('../src/assets/images/Grupo-914.png');
const imageApp =            require('../src/assets/images/Grupo-1509.png');

class Start extends Component {
    
    render() {
        return (
            <View style={[styles.container, localStyles.container]}>
                <StatusBar style="auto" />
                
                <Image style={localStyles.logo} source={logo}/>
                
                <View>
                    <Text style={styles.h1}>Welcome to</Text>
                    <Text style={[styles.h1, styles.bold]}>Bowhead<Text style={{fontFamily: 'Poppins_700Bold_Italic'}}>'</Text>s</Text>
                </View>
                
                <Image style={styles.imageApp} source={imageApp}/>
                
                <Text style={styles.wellness_logger}>Wellness Logger</Text>
                
                <MyButton title="START" onPress={() => this.props.navigation.navigate('Password')}/>
            </View>
        );
    }
}

export default Start;

const localStyles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      paddingTop: 54,
      paddingBottom: 79,
      alignItems: 'center'
    },
    logo: {
      width: 79.64,
      height: 50.65,
    },
});