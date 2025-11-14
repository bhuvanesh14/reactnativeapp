import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        // console.log(enteredText);
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
        <Modal>
<View style={styles.inputContainer}>
            <TextInput style={styles.textInput} 
            placeholder="Your course goal!"
            onChangeText={goalInputHandler} 
            value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        </Modal>
        
    );
}


export default GoalInput;

const styles = StyleSheet.create({ 
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBlockColor: '#cccccc',
      }, 
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
});