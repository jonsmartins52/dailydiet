import { Container, Frame, Logo, Profile } from "./styles";
import { Text } from "react-native";

import logoImg from "../../assets/Logo.png";
import profileImg from "../../assets/profile.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Frame>
        <Profile source={profileImg} />
      </Frame>
    </Container>
  );
}
