import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import Flexbox from './Flexbox';
import { Entypo } from '@expo/vector-icons';
import Task from './components/Task';
import { useState } from 'react';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Flexbox />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     borderColor: 'red',
//     borderWidth: 3,
//     // flex: 1 // la hauteur et la largeur du parent
//   }
// })


export default function App() {
  const [taskValue, setTaskValue] = useState('');

  // pour le onChange
  // const onChangeHandler = (event) => {

  //   setTaskValue(event.target.value);
  // }
  // pour le onChangeText
  const onChangeHandler = (text) => {

    setTaskValue(text);
  }

  console.log('dans le return taskValue : ', taskValue);
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/* liste des tasks */}
        <ScrollView>
          <Task text='Finir le cours' />
          <Task text='Manger' />
          <Task text='Dormir' />
          <Task text='Etudier' />
          <Task text='Faire du sport' />
          <Task text='Regarder youtube' />

        </ScrollView>
      </View>

      <View style={styles.addTaskWrapper}>
        {/* input  */}
        {/* <TextInput value={taskValue} style={styles.textInput} placeholder='write a task...' onChange={onChangeHandler}/> */}
        <TextInput value={taskValue} style={styles.textInput} placeholder='write a task...' onChangeText={onChangeHandler} />
        {/* button */}
        {/* 2types de bouton : Button , TouchableOpacity */}
        {/* <Button title='CLICK' color='red'/> */}
        <TouchableOpacity style={styles.btnAdd}>
          <Entypo name='plus' size={30} color='#ccc' />
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    flex: 1,
    justifyContent: 'space-between'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  addTaskWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingVertical: 20,
    flex: 1,
  },
  textInput: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    width: '80%',
  },
  btnAdd: {
    // marginHorizontal: 10,
    borderRadius: 50,
    width: 50,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  }
})


// ============= EXPLICATION ============
// const App = () => {
//   // let count = 0;
//   const [count, setCount]= useState(0); // hook
//   const onClickHandler = () => {
//     // 1ere façon
//     setCount(count + 1)
//     // 2eme façon
//     // setCount(prevCount => prevCount + 1);
//     // 3eme
//     // const newCount = count + 1;
//     // setCount(newCount); 
//   }
//   return (
//     <View style={styles.container}>
//       <Button title={`Clique sur moi ${count}`} onPress={onClickHandler}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     justifyContent:'center',
//     alignItems:'center'
//   }
// })