import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import {styles} from '../globalStyles';
import MyButton from './MyButton';

class ViewPassword extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={[styles.container]}>
            <Text style={styles.h2}>Create a Password</Text>
            <MyButton title="Lets Go!"/>
        </View>
    );
  }
}

export default ViewPassword;
