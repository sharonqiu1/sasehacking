import React, { Component } from 'react';
import { Text, Button } from 'react-native';

class HomePage extends Component {
  render() {
    return (
      <Button
      title="Get Started"
      onPress={() =>
        this.props.navigation.navigate('Symptom Selection')
      }
    />
    );
  }
}

export default HomePage;
