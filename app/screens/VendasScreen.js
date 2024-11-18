import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const VendasScreen = ({ produtos, vendas, setVendas }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Esse efeito é executado quando o componente é montado.
    setIsMounted(true);

    // Cleanup: quando o componente for desmontado, altere isMounted para false.
    return () => setIsMounted(false);
  }, []);

  const registrarVenda = (produto) => {
    if (!isMounted) return; // Verifique se o componente está montado antes de atualizar o estado.

    const novaVenda = { ...produto, data: new Date().toISOString() };
    setVendas((prevVendas) => [...prevVendas, novaVenda]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vendas</Text>
      <FlatList
        data={produtos} // Passando o array de produtos para o FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>
              {item.nome} - R$ {item.preco.toFixed(2)}
            </Text>
            <Button title="Vender" onPress={() => registrarVenda(item)} />
          </View>
        )}
      />
      <Text style={styles.title}>Vendas Registradas</Text>
      <FlatList
        data={vendas} // Passando o array de vendas para o FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>
              {item.nome} - R$ {item.preco.toFixed(2)} (Data: {item.data})
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

export default VendasScreen;
