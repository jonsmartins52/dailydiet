import { useState } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Label, StatusIndicator } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isOnDiet: boolean;
};

export function MealButton({ title, isOnDiet, ...rest }: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <Container
      {...rest}
      selected={pressed}
      isOnDiet={isOnDiet}
      onPress={() => setPressed(!pressed)}
    >
      <StatusIndicator isOnDiet={isOnDiet} />
      <Label>{title}</Label>
    </Container>
  );
}
