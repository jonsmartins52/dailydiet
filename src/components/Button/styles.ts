import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
  padding-horizontal: 24px;
  padding-vertical: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
`;

export const Icon = styled(MaterialIcons).attrs(() => ({
  size: 24,
  color: "#fff",
}))``;
