import React from "react";
import { Modal, View, Text, ScrollView, Pressable, TouchableOpacity } from "react-native";
import styles from "./style";

export type Opcao = { id: string | number; label: string };

type Props = {
  visivel: boolean;
  titulo: string;
  opcoes: Opcao[];
  aoEscolher: (o: Opcao) => void;
  aoFechar: () => void;
};

export default function ModalLista({ visivel, titulo, opcoes, aoEscolher, aoFechar }: Props) {
  return (
    <Modal visible={visivel} transparent animationType="fade">
      <View style={styles.fundoModal}>
        <View style={styles.cartaoModal}>
          <Text style={styles.tituloModal}>{titulo}</Text>

          <ScrollView style={{ maxHeight: 320 }}>
            {opcoes.map((opt) => (
              <Pressable
                key={opt.id}
                onPress={() => {
                  aoEscolher(opt);
                  aoFechar();
                }}
                style={({ pressed }) => [styles.itemModal, pressed && { opacity: 0.6 }]}
              >
                <Text style={styles.textoItemModal}>{opt.label}</Text>
              </Pressable>
            ))}
          </ScrollView>

          <TouchableOpacity onPress={aoFechar} style={styles.fecharModal}>
            <Text style={styles.textoFecharModal}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}


