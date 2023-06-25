import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Content } from "../../styles/Content";

import {
  Container,
  TitleSection,
  IconContainer,
  Icon,
  Title,
  Form,
  Section,
  Row,
  TimeSection,
  Scrollview,
} from "./styles";
import { Label } from "../../styles/Label";

export function AddMeal() {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.navigate("home" as never);
  }

  return (
    <Container>
      <TitleSection>
        <IconContainer onPress={handleBackButton}>
          <Icon />
        </IconContainer>
        <Title>Nova refeição</Title>
      </TitleSection>

      <Content>
        <Scrollview>
          <Form>
            <Section>
              <Label>Nome</Label>
              <Input />
            </Section>

            <Section>
              <Label>Descrição</Label>
              <Input multiline style={{ minHeight: 142, maxHeight: 142 }} />
            </Section>

            <Row>
              <TimeSection>
                <Label>Data</Label>
                <Input />
              </TimeSection>

              <TimeSection>
                <Label>Hora</Label>
                <Input />
              </TimeSection>
            </Row>

            <Section>
              <Label>Está dentro da dieta?</Label>
            </Section>
            <Row></Row>
          </Form>

          <Button title="Cadastrar refeição" style={{ marginBottom: 25 }} />
        </Scrollview>
      </Content>
    </Container>
  );
}
