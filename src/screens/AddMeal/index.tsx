import { useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Content } from "../../styles/Content";

import {
  Container,
  TitleSection,
  IconContainer,
  Icon,
  Title,
  Form,
  Section,
  Row,
  TimeSection,
  Scrollview,
} from "./styles";
import { Label } from "../../styles/Label";
import { MealButton } from "../../components/MealButton";

type Meal = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isOnDiet: boolean;
};

export function AddMeal() {
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealDate, setMealDate] = useState(new Date());
  const [mealTime, setMealTime] = useState(new Date());
  const [isOnDiet, setIsOnDiet] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const navigation = useNavigation();

  function handleBackButton() {
    navigation.navigate("home");
  }

  function handleMealDate(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) {
    if (event.type === "dismissed") {
      setShowDatePicker(false);
    }

    if (!selectedDate) return;

    setShowDatePicker(false);
    setMealDate(selectedDate);
  }

  function handleMealTime(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) {
    if (event.type === "dismissed") {
      setShowTimePicker(false);
    }

    if (!selectedDate) return;

    setShowTimePicker(false);
    setMealTime(selectedDate);
  }

  function handleAddMeal() {
    const data = {
      name: mealName,
      description: mealDescription,
      date: mealDate,
      hour: mealTime,
      isOnDiet,
    };

    console.log(data);
  }

  return (
    <Container>
      <TitleSection>
        <IconContainer onPress={handleBackButton}>
          <Icon />
        </IconContainer>
        <Title>Nova refeição</Title>
      </TitleSection>

      <Content>
        <Scrollview>
          <Form>
            <Section>
              <Label>Nome</Label>
              <Input
                onChangeText={(value) => {
                  setMealName(value);
                }}
              />
            </Section>

            <Section>
              <Label>Descrição</Label>
              <Input
                multiline
                style={{ minHeight: 142, maxHeight: 142 }}
                onChangeText={(value) => {
                  setMealDescription(value);
                }}
              />
            </Section>

            <Row>
              <TimeSection>
                <Label>Data</Label>
                <Pressable
                  style={{ width: "100%" }}
                  onPress={() => setShowDatePicker(true)}
                >
                  <Input
                    editable={false}
                    value={mealDate.toLocaleDateString()}
                  />
                </Pressable>
                {showDatePicker && (
                  <DateTimePicker value={mealDate} onChange={handleMealDate} />
                )}
              </TimeSection>

              <TimeSection>
                <Label>Hora</Label>
                <Pressable onPress={() => setShowTimePicker(true)}>
                  <Input
                    editable={false}
                    value={mealTime.toLocaleTimeString()}
                  />
                </Pressable>
                {showTimePicker && (
                  <DateTimePicker
                    mode="time"
                    value={mealTime}
                    onChange={handleMealTime}
                  />
                )}
              </TimeSection>
            </Row>

            <Section>
              <Label>Está dentro da dieta?</Label>
            </Section>
            <Row>
              <MealButton
                title="Sim"
                isOnDiet
                onPress={() => setIsOnDiet(true)}
              />
              <MealButton
                title="Não"
                isOnDiet={false}
                onPress={() => setIsOnDiet(false)}
              />
            </Row>
          </Form>

          <Button
            title="Cadastrar refeição"
            onPress={handleAddMeal}
            style={{ marginBottom: 25 }}
          />
        </Scrollview>
      </Content>
    </Container>
  );
}
