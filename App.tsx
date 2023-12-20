
import React from 'react';
import { View,Text,Button, FlatList} from 'react-native';


function App(): JSX.Element {
  const arraydata = [
    { id: 1, name: "super" },
    { id: 2, name: "dry" },
    { id: 3, name: "hot" },
    { id: 4, name: "cool" },
    { id: 6, name: "not" },
    { id: 0, name: "use" }
    
 ]
 

  return (
     <View>
      <Text style={{ fontSize: 20 }}>Hello react native i have finally achieve you</Text>
        
      <Button title='press me'></Button>
    </View>
  );
}

export default App;
