import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
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

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
  name: "arrow-back",
}))``;

export const StatsTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const StatsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Content = styled.View`
  flex: 1;
  background-color: #fafafa;
  border-radius: 20px;
`;
