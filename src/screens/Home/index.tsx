import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";
import { MealCard } from "../../components/MealCard";

import { Container, Title, ListContainer, SectionTitle } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const DATA = [
    {
      title: "12.08.22",
      data: [
        { meal: "Pizza", time: "20:00" },
        { meal: "Burger", time: "18:00" },
        { meal: "Risotto", time: "21:00" },
      ],
    },
    {
      title: "11.08.22",
      data: [
        { meal: "French Fries", time: "15:00" },
        { meal: "Onion Rings", time: "20:00" },
        { meal: "Fried Shrimps", time: "21:00" },
      ],
    },
    {
      title: "10.08.22",
      data: [
        { meal: "Water", time: "11:00" },
        { meal: "Coke", time: "16:00" },
        { meal: "Beer", time: "08:50" },
      ],
    },
    {
      title: "09.08.22",
      data: [
        { meal: "Cheese Cake", time: "10:45" },
        { meal: "Ice Cream", time: "23:00" },
      ],
    },
  ];

  function handleStats() {
    navigation.navigate("stats");
  }

  function handleAddMeal() {
    navigation.navigate("addMeal");
  }

  return (
    <Container>
      <Header />
      <Percent onPress={handleStats} isOnDiet />
      <Title>Refeições</Title>
      <Button title="Nova refeição" icon="add" onPress={handleAddMeal} />

      <ListContainer>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.meal + index}
          renderItem={({ item }) => (
            <MealCard hour={item.time} meal={item.meal} status={true} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>
    </Container>
  );
}
