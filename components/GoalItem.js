import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return(
      <Pressable android_ripple={{ color: '#000000'}} onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed &&  }>
  <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Pressable>
      
      );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 10,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
});