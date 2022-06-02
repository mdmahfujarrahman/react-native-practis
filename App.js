import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countrys from './components/Countrys';


export default function App() {
  return (
      <View style={styles.container}>
          <Text>Hello? How are you</Text>
          <Countrys/>
          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
