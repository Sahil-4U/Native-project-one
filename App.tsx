import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

function App(): JSX.Element {
  const [val, setVal] = useState('');
  const [store, setStore] = useState([
    {
      id: 123,
      text: 'where is my money',
    },
  ]);
  const showStore = () => {
    if (val == '') return Alert.alert('Danger', 'Enter val for a result', [{
      text: 'ok',
    }]);
    setStore(prev => [...prev, {id: Math.random() * 3, text: val}]);
    setVal('');
  };
  const handleDelete = id => {
    const updatedArray = store.filter(data => data.id != id);
    setStore(updatedArray);
  };
  return (
    <View>
      <Text style={styles.container}>This is start of my app building</Text>
      <TextInput
        style={styles.textInput}
        value={val}
        onChangeText={text => setVal(text)}
      />
      <View style={styles.buttoncontainer}>
        <Button title="press me" onPress={showStore} />
      </View>
      <ScrollView style={styles.outputcontainer}>
        {store &&
          store.map(data => (
            <Text
              style={{
                color: 'white',
                backgroundColor: 'green',
                margin: 10,
                height: 30,
                fontSize: 20,
              }}
              onPress={() => handleDelete(data.id)}>
              {data.text}
            </Text>
          ))}
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    color: '#171717',
  },
  textInput: {
    borderColor: 'red',
    borderWidth: 2,
    color: '#717171',
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 20,
  },
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outputcontainer: {
    paddingLeft: 10,
    color: 'green',
    height:400,
  },
});
