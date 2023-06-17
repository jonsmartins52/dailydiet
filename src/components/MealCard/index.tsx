import { TouchableOpacityProps } from "react-native";
import {
  Container,
  HourText,
  MealText,
  Separator,
  StatusIndicator,
} from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  meal: string;
  status: boolean;
};

export function MealCard({ hour, meal, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <HourText>{hour}</HourText>
      <Separator />
      <MealText>{meal}</MealText>
      <StatusIndicator isOnDiet={status} />
    </Container>
  );
}
