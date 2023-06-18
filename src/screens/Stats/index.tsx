import { useNavigation } from "@react-navigation/native";
import {
  Container,
  StatsHeader,
  StatsTitle,
  StatsSubTitle,
  StatsText,
  Content,
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
          <StatsText>das refeições dentro da dieta</StatsText>
        </HeaderContent>
      </StatsHeader>

      <Content>
        <StatsSubTitle>Estatísticas gerais</StatsSubTitle>
        <StatsArea>
          <Section>
            <SectionTitle>22</SectionTitle>
            <StatsText>melhor sequência de pratos dentro da dieta</StatsText>
          </Section>

          <Section>
            <SectionTitle>109</SectionTitle>
            <StatsText>refeições registradas</StatsText>
          </Section>

          <Row>
            <StatsSection isOnDiet>
              <SectionTitle>99</SectionTitle>
              <StatsText>refeições dentro da dieta</StatsText>
            </StatsSection>

            <StatsSection isOnDiet={false}>
              <SectionTitle>10</SectionTitle>
              <StatsText>refeições fora da dieta</StatsText>
            </StatsSection>
          </Row>
        </StatsArea>
      </Content>
    </Container>
  );
}
