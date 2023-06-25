import { useNavigation } from "@react-navigation/native";

import { Content } from "../../styles/Content";
import { Description } from "../../styles/Description";

import {
  Container,
  StatsHeader,
  StatsTitle,
  StatsSubTitle,
  IconContainer,
  Icon,
  HeaderContent,
  StatsArea,
  Section,
  Row,
  StatsSection,
  SectionTitle,
} from "./styles";

export function Stats() {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.navigate("home" as never);
  }

  return (
    <Container isOnDiet>
      <StatsHeader>
        <IconContainer onPress={handleBackButton}>
          <Icon isOnDiet />
        </IconContainer>

        <HeaderContent>
          <StatsTitle>90,86%</StatsTitle>
          <Description>das refeições dentro da dieta</Description>
        </HeaderContent>
      </StatsHeader>

      <Content>
        <StatsSubTitle>Estatísticas gerais</StatsSubTitle>
        <StatsArea>
          <Section>
            <SectionTitle>22</SectionTitle>
            <Description>
              melhor sequência de pratos dentro da dieta
            </Description>
          </Section>

          <Section>
            <SectionTitle>109</SectionTitle>
            <Description>refeições registradas</Description>
          </Section>

          <Row>
            <StatsSection isOnDiet>
              <SectionTitle>99</SectionTitle>
              <Description>refeições dentro da dieta</Description>
            </StatsSection>

            <StatsSection isOnDiet={false}>
              <SectionTitle>10</SectionTitle>
              <Description>refeições fora da dieta</Description>
            </StatsSection>
          </Row>
        </StatsArea>
      </Content>
    </Container>
  );
}
