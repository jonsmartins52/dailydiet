import {
  Container,
  PercentValue,
  PercentText,
  ArrowIcon,
  IconContainer,
} from "./styles";

export function Percent() {
  return (
    <Container isFollowingDiet>
      <IconContainer onPress={() => {}}>
        <ArrowIcon />
      </IconContainer>
      <PercentValue>90,86%</PercentValue>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}
