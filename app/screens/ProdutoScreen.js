import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

const ProdutoScreen = ({ produtos, setProdutos }) => {
  const [produtoNome, setProdutoNome] = useState("");
  const [produtoPreco, setProdutoPreco] = useState("");

  const adicionarProduto = () => {
    // Verificação se os campos estão preenchidos
    if (!produtoNome || !produtoPreco) {
      alert("Preencha todos os campos");
      return;
    }

    // Verificar se o preço é um número válido
    console.log("Valor do Preço antes da verificação:", produtoPreco); // Depuração
    const precoNumerico = parseFloat(produtoPreco);
    console.log("Preço após conversão para número:", precoNumerico); // Depuração

    if (isNaN(precoNumerico) || precoNumerico <= 0) {
      console.log("Preço inválido"); // Depuração para verificar se a condição é atingida
      Alert.alert("Erro", "Por favor, insira um preço válido.");
      return;
    }

    // Adiciona o produto
    const novoProduto = {
      id: Date.now().toString(),
      nome: produtoNome,
      preco: precoNumerico,
    };

    // Atualiza o estado com o novo produto
    setProdutos([...produtos, novoProduto]);

    // Limpa os campos de entrada
    setProdutoNome("");
    setProdutoPreco("");
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
