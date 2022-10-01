import { useState } from "react";
import { FlatList } from "react-native";

import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  function handleNewGroup() {
    navigate("newGroups");
  }

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua Turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre uma tuma, lista vazia." />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar Nova Turma" onPress={handleNewGroup} />
    </Container>
  );
}
