import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    
 
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                   <View styles={styles.button}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                   </View>
                   <View styles={styles.button}>
                    <Button title="ADD" onPress={addGoalHandler} />
                   </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button:{
        width: '40%',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        color:'black',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});

export default GoalInput;