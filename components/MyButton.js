import React, { PureComponent } from 'react';
import {  TouchableOpacity, Text } from 'react-native';
import {styles} from '../globalStyles';

class MyButton extends PureComponent {
  constructor(props) {
    super(props);
    this.disabled = this.props.disabled || false
  }
  disabled = false;

  render() {
    const {props, disabled} = this;
    return (
    <TouchableOpacity
      accessibilityRole="button"
      disabled={disabled}
      onPress={this.props.onPress}
      style={[styles.btnPrimary, disabled && styles.btnDisabled]}
    >
      <Text style={[styles.textWhite, styles.btnText]}>{this.props.title}</Text>
    </TouchableOpacity>
    );
  }
}

export default MyButton;
