import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type StatsStyleProps = {
  isOnDiet: boolean;
};

export const Container = styled.View<StatsStyleProps>`
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const StatsHeader = styled.View`
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.TouchableOpacity`
  align-self: flex-start;
  margin-left: 20px;
`;

export const StatsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const StatsSubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StatsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`;

export const Content = styled.View`
  align-items: center;
  flex: 1;
  background-color: #fafafa;
  border-radius: 20px;
`;

export const StatsArea = styled.View`
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Section = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  gap: 8px;
  height: 89px;
  justify-content: center;
  padding: 16px;
  width: 327px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const StatsSection = styled.View<StatsStyleProps>`
  align-items: center;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  gap: 8px;
  height: 89px;
  justify-content: center;
  padding: 16px;
  width: 157px;
`;

export const Icon = styled(MaterialIcons).attrs<StatsStyleProps>(
  ({ theme, isOnDiet }) => ({
    size: 24,
    color: isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    name: "arrow-back",
  })
)``;
