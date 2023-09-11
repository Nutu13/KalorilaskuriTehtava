import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { Picker } from "react-native-web";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(1.3);
  const [gender, setGender] = useState("male");
  const [calories, setCalories] = useState(0);

  const intensities = Array();
  intensities.push({ label: "Light", value: 1.3 });
  intensities.push({ label: "Usual", value: 1.5 });
  intensities.push({ label: "Moderate", value: 1.7 });
  intensities.push({ label: "Hard", value: 2 });
  intensities.push({ label: "Very hard", value: 2.2 });

  const genders = Array();
  genders.push({ label: "Male", value: "male" });
  genders.push({ label: "Female", value: "female" });

  const calculate = () => {
    let result = 0;
    if (gender === "male") {
      result = (879 + 10.2 * weight) * intensity;
    } else {
      result = (795 + 7.18 * weight) * intensity;
    }
    setCalories(result);
  };

  return (
    <View style={styles.container}>
      <Text>Weight</Text>
      <View style={styles.field}>
        <TextInput
          style={styles.field}
          onChangeText={setWeight} // This is called when the user types something into the field
          value={weight}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.field}>
        <Text>Intensity</Text>
        <Picker
          style={styles.intensity}
          onValueChange={(itemValue) => setIntensity(itemValue)}
          selectedValue={intensity}
        >
          {intensities.map((intensity, index) => (
            <Picker.Item
              key={index}
              label={intensity.label}
              value={intensity.value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonsize={10}
          radio_props={genders}
          initial={0}
          onPress={(value) => setGender(value)}
        />
      </View>
      <View style={styles.field}>
        <Text>{calories.toFixed(0)}</Text>
      </View>
      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    marginBottom: 10,
    marginTop: 10,
  },
  intensity: {
    alignSelf: "stretch",
  },
  radio: {
    marginTop: 10,
  },
});
