
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontFamily: 'Poppins_400Regular'
  },
  h2: {
    fontSize: 25,
    fontFamily: 'Poppins_400Regular'
  },
  bold: {
    fontFamily: 'Poppins_700Bold'
  },
  wellness_logger: {
      fontSize: 25,
      fontFamily: 'Poppins_400Regular'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
  },
  btnPrimary: {
    backgroundColor:'#1dacc1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 66,
    width: 273,
    shadowOpacity: .15,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  btnText: {
    fontSize: 21,
  },
  textWhite: {
    color: '#fff'
  },

  // form
  textInput: {
    height: 54,
    borderColor: '#b9b9b9',
    borderWidth: 1,
    width: '100%',
    marginTop: 28,
    marginBottom: 28,
    borderRadius: 5

  }
});