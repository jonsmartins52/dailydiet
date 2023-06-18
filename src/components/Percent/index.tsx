import {
  Container,
  PercentValue,
  PercentText,
  ArrowIcon,
  IconContainer,
} from "./styles";

type Props = {
  onPress: () => void;
};

export function Percent({ onPress }: Props) {
  return (
    <Container isFollowingDiet>
      <IconContainer onPress={onPress}>
        <ArrowIcon />
      </IconContainer>
      <PercentValue>90,86%</PercentValue>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}
