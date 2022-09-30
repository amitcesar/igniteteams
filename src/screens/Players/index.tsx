import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import React from "react";
import { Container, Form } from "./styles";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input autoCorrect={false} placeholder="Nome do participante" />

        <ButtonIcon icon="add" />
      </Form>
      <Filter title="Time A" isActive />
      <Filter title="Time B" />
    </Container>
  );
}
