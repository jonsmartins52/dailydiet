import { Container, Title } from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent />
      <Title>Refeições</Title>
    </Container>
  );
}
