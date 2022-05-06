import React from 'react';
import { View, Button } from 'react-native';

function WelcomeScreen() {
  return (
    <View>
      <Text>Please login to continue!</Text>
      <Button title="Login"/>
    </View>
    );
}

export default WelcomeScreen;