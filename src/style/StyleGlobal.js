import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    screenContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:  'center',
        backgroundColor: 'white'
    },
    buttonText: {
        color: Colors.textButton,
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: Colors.button,
        height: 70,
        width: 250,
        margin: 10,
        justifyContent: 'center',
        borderRadius: 20
      },
      container: {
        backgroundColor: Colors.container,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 310,
        width: 350,
        borderRadius: 12
        
      },
      textContainer: {
         color:  Colors.textContainer,
         textAlign: 'justify',
         textAlignVertical: 'center',
         margin: 10,
         fontSize: 15
         
      }
});