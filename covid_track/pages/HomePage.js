import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


class HomePage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.covidTitle}>
          Covid Tracker
        </Text>
        <Button
        title="Get Started"
        onPress={() =>
          this.props.navigation.navigate('Symptom Selection')
        }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  covidTitle: {
    marginTop: 40,
    fontSize: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default HomePage;
