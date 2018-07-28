import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
   counter: 0
 }

 onPress = () => this.setState({ counter: this.state.counter + 1 })

  render() {
    return (
      <View style={styles.container} accessibilityLabel="testview">
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text accessibilityLabel="counter">{this.state.counter}</Text>
        <Button onPress={this.onPress} title="Press me" accessibilityLabel="button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
