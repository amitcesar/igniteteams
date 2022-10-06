import { useEffect, useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { groupsGetAll } from "@storage/group/groupGetAll";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  function handleNewGroup() {
    navigate("newGroups");
  }

  async function fetchGroups() {
    try {
      const response = await groupsGetAll();
      setGroups(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOpenGroup(group: string) {
    navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua Turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
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
