import 
  React, 
  { Component }     from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
}                   from 'react-native';
import {styles}     from '../globalStyles';
import MyButton     from '../components/MyButton';
import InputRadio   from '../components/InputRadio';
const imageHr =     require('../src/assets/images/Linea-56.png');
const imageHeader = require('../src/assets/images/Grupo-660.png');

class ScreenTrackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1: '',
      answer2: ''
    };
  }

  optionsAnswer1 = [
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
  optionsAnswer2 = [
    {
      key: 'yes',
      text: 'Yes'
    },
    {
      key: 'no',
      text: 'No'
    }
  ]

  setAnswer1 = (key) => {
    this.setState(() => ({
      answer1: key
    }))
  }

  setAnswer2 = (key) => {
    this.setState(() => ({
      answer2: key
    }))
  }

  setDisabled = () => {
    const {answer1, answer2} = this.state;
    if (answer1 === '' || answer2 === '') {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { props, setAnswer1, setAnswer2, setDisabled } = this;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.alignItemsCenter}>
            <Image style={[localStyles.imageHeader, styles.alignItemsCenter]} source={imageHeader}/>
        </View>
        
        <Text style={[styles.h2, styles.textCenter, styles.semiBold]}>Track your wellness</Text>
        
        <Image style={styles.imageHr} source={imageHr}/>
        
        <View>
            <Text style={[styles.h3, localStyles.textQuestion]}>How do you feel?</Text>
            <InputRadio options={this.optionsAnswer1} onChange={setAnswer1}/>
        </View>
        
        <Image style={styles.imageHr} source={imageHr}/>
        
        <View>
            <Text style={[styles.h3, localStyles.textQuestion]}>Did you sleep well?</Text>
            <InputRadio options={this.optionsAnswer2} onChange={setAnswer2}/>
        </View>
        
        <Image style={styles.imageHr} source={imageHr}/>
        
        <View style={styles.alignItemsCenter}>
          <MyButton title="Submit" onPress={() => props.navigation.navigate('Logs')} disabled={setDisabled()} style={styles.alignItemsCenter}/>
        </View>
      </ScrollView>
    );
  }
}

export default ScreenTrackForm;

const localStyles = StyleSheet.create({
    imageHeader: {
      height: 117.25,
      marginBottom: 8,
      width: 151.18,
    },
    textQuestion: {
      marginBottom: 7.5
    }
});