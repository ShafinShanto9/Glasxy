import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/themes/colors';
import { spacing } from './src/themes/spacing';

export default function App() {

  const [loader] = useFonts({ //Loading Require Fonts
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular' : require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  })
  if (!loader) {
    return (<Text>Font is loading ....</Text>);
  }
  return (
    <View style={styles.container}>
      <Text>Hey Hello React Native</Text>
      <Text style={{marginTop: spacing[2], fontFamily:'LeagueSpartan-Regular', fontSize: spacing[8]}} >Here Using Spacing i'm sure its working</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
