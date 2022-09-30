import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, NamePlayer } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <NamePlayer>{name}</NamePlayer>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
