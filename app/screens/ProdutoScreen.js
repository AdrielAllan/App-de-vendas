import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const ProdutoScreen = ({ produtos, setProdutos }) => {
  const [produtoNome, setProdutoNome] = useState("");
  const [produtoPreco, setProdutoPreco] = useState("");

  const adicionarProduto = () => {
    if (produtoNome && produtoPreco) {
      const novoProduto = {
        id: Date.now().toString(),
        nome: produtoNome,
        preco: parseFloat(produtoPreco),
      };
      setProdutos([...produtos, novoProduto]);
      setProdutoNome("");
      setProdutoPreco("");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={produtoNome}
        onChangeText={setProdutoNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do Produto"
        keyboardType="numeric"
        value={produtoPreco}
        onChangeText={setProdutoPreco}
      />
      <Button title="Adicionar Produto" onPress={adicionarProduto} />
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
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  listItem: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});

export default ProdutoScreen;
