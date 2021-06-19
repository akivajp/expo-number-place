import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth  = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Math.min(screenWidth, screenHeight) * 0.04,
    //fontSize: width * 0.03,
  }
});

export default styles;
