import 
  React, 
  { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
}                   from 'react-native';
import {styles}     from '../globalStyles';
const imageHr =     require('../src/assets/images/Linea-56.png');

class AnswerLog extends PureComponent {
  render() {
    return (
      <View>
        <View style={localStyles.item}>
            <Text style={[styles.p, localStyles.p, styles.semiBold]}>Feeling: </Text>
            <Text style={[styles.p, localStyles.p]}>Perfect</Text>
        </View>
        
        <View style={localStyles.item}>
            <Text style={[styles.p, localStyles.p, styles.semiBold]}>Sleep quality: </Text>
            <Text style={[styles.p, localStyles.p]}>Perfect</Text>
        </View>
        
        <Image style={styles.imageHr} source={imageHr}/>
      </View>
    );
  }
}
export default AnswerLog;

const localStyles = StyleSheet.create({
    p: {
      fontSize: 20
    },
    item: {
      alignItems: 'baseline',
      flexDirection:'row',
      marginBottom: 4,
      marginTop: 4,
    }
})