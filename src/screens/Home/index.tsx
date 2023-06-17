import { Container, Title } from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent />
      <Title>Refeições</Title>
      <Button title="Nova refeição" icon="add" />
    </Container>
  );
}
