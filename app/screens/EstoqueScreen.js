import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const EstoqueScreen = ({ produtos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>
              {item.nome} - R$ {item.preco.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  listItem: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});

export default EstoqueScreen;
