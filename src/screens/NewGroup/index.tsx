import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AppError } from "@utils/AppError";
import { createGroup } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleNavigationToPlayerScreen() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Novo Grupo", "Digite o nome da Turma");
      }

      await createGroup(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Criar Novo Grupo", error.message);
      } else {
        Alert.alert("Criar Novo Grupo", "Não foi possivel criar um novo Grupo");
        console.log(error);
      }
      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNavigationToPlayerScreen}
        />
      </Content>
    </Container>
  );
}
