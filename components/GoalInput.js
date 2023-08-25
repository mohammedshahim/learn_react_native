import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Text,
  Modal,
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 6,
    marginTop: 16,
  },
});
