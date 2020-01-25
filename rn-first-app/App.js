import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [ isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelGoalAddtionHandler = () => {
    setIsAddMode(false);
}

  return (
    <View style={styles.screen} on>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddtionHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}/>
        )}/>
        <View>
        </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});