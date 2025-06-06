import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function CommunityDetailsCard({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.address}>{item.address}</Text>
      <Text style={styles.subtitle}>Necessidades:</Text>
      <FlatList
        data={item.needs}
        keyExtractor={(n) => n.id.toString()}
        renderItem={({ item: need }) => <Text style={styles.item}>• {need.name}</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  item: {
    fontSize: 14,
    marginLeft: 8,
  },
});