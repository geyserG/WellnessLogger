import 
  React, 
  { PureComponent } from 'react';
import {
  TouchableOpacity,
  Image
}                   from 'react-native';
import {styles}     from '../globalStyles';
const imageBtn =    require('../src/assets/images/Grupo-508.png');

class ButtonBack extends PureComponent {
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
      style={styles.btn}
    >
      <Image source={imageBtn}/>
    </TouchableOpacity>
    );
  }
}

export default ButtonBack;