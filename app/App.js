import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ProdutoScreen from "./screens/ProdutoScreen";
import VendasScreen from "./screens/VendasScreen";

export default function App() {
  const [produtos, setProdutos] = useState([]); // Estado para os produtos
  const [vendas, setVendas] = useState([]); // Estado para as vendas

  return (
    <View style={styles.container}>
      {/* Passando os estados e funções de atualização para as telas */}
      <ProdutoScreen produtos={produtos} setProdutos={setProdutos} />
      <VendasScreen produtos={produtos} vendas={vendas} setVendas={setVendas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50, // Adiciona espaço no topo da tela
  },
});
