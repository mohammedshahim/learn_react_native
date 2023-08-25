import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View>
        <TouchableOpacity
          onPress={addGoalHandler}
          style={{ backgroundColor: "blue", padding: 10, borderRadius: 4 }}
        >
          <Text style={{ color: "white" }}>Add Goal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 4,
  },
  button: {
    color: "blue",
  },
});
