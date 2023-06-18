import { useNavigation } from "@react-navigation/native";
import {
  Container,
  StatsHeader,
  StatsTitle,
  StatsText,
  Content,
  IconContainer,
  Icon,
  HeaderContent,
} from "./styles";

export function Stats() {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.navigate("home" as never);
  }

  return (
    <Container>
      <StatsHeader>
        <IconContainer onPress={handleBackButton}>
          <Icon />
        </IconContainer>

        <HeaderContent>
          <StatsTitle>90,86%</StatsTitle>
          <StatsText>das refeições dentro da dieta</StatsText>
        </HeaderContent>
      </StatsHeader>

      <Content>
        <StatsText>Estatisticas</StatsText>
      </Content>
    </Container>
  );
}
