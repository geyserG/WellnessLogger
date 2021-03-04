
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 30,
  },
  h2: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 25,
  },
  bold: {
    fontFamily: 'Poppins_700Bold'
  },
  wellness_logger: {
    fontFamily: 'Poppins_400Regular',
      fontSize: 25,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 21,
  },
  btnPrimary: {
    alignItems: 'center',
    backgroundColor:'#1dacc1',
    borderRadius: 10,
    display: 'flex',
    height: 66,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: .15,
    shadowRadius: 6,
    width: 273,
  },
  btnText: {
    fontSize: 21,
  },
  textWhite: {
    color: '#fff'
  },
  textCenter: {
    textAlign: 'center'
  },

  // form
  textInput: {
    borderColor: '#b9b9b9',
    borderRadius: 5,
    borderWidth: 1,
    display: 'flex',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    height: 54,
    marginBottom: 28,
    marginTop: 28,
    padding: 15,
  },

  // other
  imageApp: {
    width: 302.39,
    height: 252.41
  }
});