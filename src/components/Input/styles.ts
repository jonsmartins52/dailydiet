import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  min-height: 48px;
  max-height: 48px;
  width: 100%;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 14px;
`;
