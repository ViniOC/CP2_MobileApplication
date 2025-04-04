import { StyleSheet, View } from 'react-native';
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* Todo o conteúdo principal da sua app vai aqui */}

      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  content: {
    flex: 1, 
  },
});