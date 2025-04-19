import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Donation() {
  const [doacao, setDoacao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [doacoes, setDoacoes] = useState([]);

  const registerDonation = async () => {
    Keyboard.dismiss();

    let doacoesList = [];

    const stored = await AsyncStorage.getItem('DOACOES');
    if (stored) {
      doacoesList = JSON.parse(stored);
    }

    if (doacao.trim()) {
      const index = doacoesList.findIndex(
        (item) => item.nome.toLowerCase() === doacao.toLowerCase()
      );

      const quantidadeNum = Number(quantidade) || 1;

      if (index !== -1) {
        doacoesList[index].quantidade += quantidadeNum;
      } else {
        const novaDoacao = {
          id: Date.now().toString(),
          nome: doacao.trim(),
          quantidade: quantidadeNum,
        };
        doacoesList.push(novaDoacao);
      }

      await AsyncStorage.setItem('DOACOES', JSON.stringify(doacoesList));
      setDoacao('');
      setQuantidade('');
      loadDonation();
    }
  };

  const loadDonation = async () => {
    const stored = await AsyncStorage.getItem('DOACOES');
    if (stored) {
      setDoacoes(JSON.parse(stored));
    } else {
      setDoacoes([]);
    }
  };

  useEffect(() => {
    loadDonation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Doação</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da doação"
        value={doacao}
        onChangeText={setDoacao}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Button title="Cadastrar" onPress={registerDonation} />

      <Text style={styles.secondTitle}>Doações Cadastradas</Text>

      {doacoes.length === 0 ? (
        <Text style={styles.semDoacoes}>Nenhuma doação cadastrada ainda.</Text>
      ) : (
        <FlatList
          data={doacoes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>
                Quantidade: {item.quantidade}, Item: {item.nome}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d8d2ec',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  secondTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#e6e6e6',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  cardTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  semDoacoes: {
    fontStyle: 'italic',
    marginTop: 10,
  },
});
