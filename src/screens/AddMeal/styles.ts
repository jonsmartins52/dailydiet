import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
`;

export const Scrollview = styled.ScrollView`
  padding-bottom: 15px;
`;

export const TitleSection = styled.View`
  height: 130px;
  gap: 90px;
  align-items: center;
  flex-direction: row;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const Form = styled.View`
  gap: 12px;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;
`;

export const Section = styled.View`
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  width: 327px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const TimeSection = styled.View`
  align-items: flex-start;
  gap: 8px;
  height: 89px;
  padding: 16px;
  width: 157px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
  name: "arrow-back",
}))``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
`;
