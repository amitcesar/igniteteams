import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import React from "react";
import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />
    </Container>
  );
}
