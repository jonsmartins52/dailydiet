import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Content } from "../../styles/Content";

import {
  Container,
  TitleSection,
  IconContainer,
  Icon,
  Title,
  Form,
} from "./styles";

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
        <Form></Form>

        <Button title="Cadastrar refeição" icon="add" />
      </Content>
    </Container>
  );
}
