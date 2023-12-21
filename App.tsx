
import React, { useState } from 'react';
import { View,Text,Button, FlatList, StyleSheet, TextInput} from 'react-native';


function App(): JSX.Element {
  const [val, setVal] = useState('');
  const [store, setStore] = useState(' ');
  const showStore = () => {
    setStore(val);
 }

  return (
    <View>
      <Text style={styles.container}>This is start of my app building</Text>
      <TextInput
        style={styles.textInput}
        value={val}
        onChangeText={(e)=>setVal(e.target.value)}
      />
      <View>
        <Text>{store}</Text>
      </View>
      <Button title='press me'
      onPress={showStore}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    textAlign:'center'
  },
  textInput: {
    borderColor:'red',
    borderWidth: 2,
    color:'#717171',
  }
})