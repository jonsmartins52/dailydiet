import styled from "styled-components/native";
import { MealCardStyleProps } from "../MealCard/styles";

export type MealButtonStyleProps = {
  selected?: boolean;
  isOnDiet?: boolean;
};

export const Container = styled.TouchableOpacity<MealButtonStyleProps>`
  background-color: ${({ theme, selected, isOnDiet }) =>
    !selected
      ? theme.COLORS.GRAY_600
      : isOnDiet
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid
    ${({ theme, selected, isOnDiet }) =>
      !selected
        ? theme.COLORS.GRAY_600
        : isOnDiet
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};
  width: 140px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const StatusIndicator = styled.View<MealCardStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 7px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
