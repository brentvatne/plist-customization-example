import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Permissions } from 'expo';

export default class App extends React.Component {
  _askPermission = async () => {
    Permissions.askAsync(Permissions.CAMERA);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Ask permission" onPress={this._askPermission} />
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
