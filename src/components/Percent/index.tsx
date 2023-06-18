import {
  Container,
  PercentValue,
  PercentText,
  ArrowIcon,
  IconContainer,
} from "./styles";

type Props = {
  onPress: () => void;
  isOnDiet: boolean;
};

export function Percent({ onPress, isOnDiet }: Props) {
  return (
    <Container isFollowingDiet={isOnDiet}>
      <IconContainer onPress={onPress}>
        <ArrowIcon isFollowingDiet={isOnDiet} />
      </IconContainer>
      <PercentValue>90,86%</PercentValue>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  );
}
