import React from 'react';
import {View, Text} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';

const App = () => {
  return (
    <TailwindProvider>
      <View>
        <Text className="text-red-500 text-4xl ">App</Text>
      </View>
    </TailwindProvider>
  );
};

export default App;
