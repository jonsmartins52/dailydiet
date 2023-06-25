import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentProps = {
  isFollowingDiet: boolean;
};

export const Container = styled.View<PercentProps>`
  background-color: ${({ theme, isFollowingDiet }) =>
    isFollowingDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  align-items: center;
  border-radius: 8px;
  padding: 20px 16px;
  margin-top: 35px;
  margin-bottom: 40px;
`;

export const PercentValue = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const IconContainer = styled.TouchableOpacity`
  flex: 1;
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ArrowIcon = styled(ArrowUpRight).attrs<PercentProps>(
  ({ theme, isFollowingDiet }) => ({
    size: 24,
    color: isFollowingDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
