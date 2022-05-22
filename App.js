import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/themes/colors';
import { spacing } from './src/themes/spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey Hello React Native</Text>
      <Text style={{marginTop: spacing[8]}} >Here Using Spacing</Text>
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
