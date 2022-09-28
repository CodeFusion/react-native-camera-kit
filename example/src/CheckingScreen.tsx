import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BarcodeScreen from './BarcodeScreenExample';
import {BarcodeFormat, BarcodeValueType} from "../../src/types";

export default class CheckingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: undefined,
    };
  }

  render() {
    if (this.state.example) {
      const CheckingScreen = this.state.example;
      const value = this.state.value;
      return <CheckingScreen value={value} />;
    }
    const value = this.props.value;
    return (
      <View style={styles.container}>
        <Text style={styles.valueText}>Value: {value.codeStringValue}</Text>
        <Text style={styles.valueText}>Format: {BarcodeFormat[value.codeFormat]} ({value.codeFormat})</Text>
        <Text style={styles.valueText}>Type: {BarcodeValueType[value.codeType]} ({value.codeType})</Text>
        <TouchableOpacity onPress={() => this.setState({ example: BarcodeScreen })}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  valueText: {
    marginBottom: 20,
    fontSize: 25,
  },
  buttonText: {
    color: 'blue',
    marginBottom: 20,
    fontSize: 20,
  },
});
