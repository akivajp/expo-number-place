import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './config/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>数独パズル</Text>
      <StatusBar style="auto" />
    </View>
  );
}
