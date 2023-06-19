import { useNavigation } from "@react-navigation/native";

import { Container, TitleSection, IconContainer, Icon } from "./styles";

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
      </TitleSection>
    </Container>
  );
}
