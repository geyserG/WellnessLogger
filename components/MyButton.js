import React, { PureComponent } from 'react';
import {  Alert, TouchableOpacity, Text } from 'react-native';
import {styles} from '../globalStyles';

class MyButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.btnPrimary}
        accessibilityLabel="Learn more about this purple button"
    >
        <Text style={[styles.textWhite, styles.btnText]}>{this.props.title}</Text>
    </TouchableOpacity>
    );
  }
}

export default MyButton;
