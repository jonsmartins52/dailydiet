import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
`;

export const TitleSection = styled.View`
  height: 200px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const IconContainer = styled.TouchableOpacity`
  align-self: flex-start;
  margin-left: 20px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
  name: "arrow-back",
}))``;
