import styled from "styled-components/native";

export type MealCardStyleProps = {
  isOnDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 15px;
  padding: 14px 16px 14px 12px;
  width: 100%;
`;

export const HourText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const MealText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  flex: 1;
`;

export const Separator = styled.View`
  width: 0;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const StatusIndicator = styled.View<MealCardStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
