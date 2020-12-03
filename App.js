/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from './components/Header';
import Event from './components/Event';
import ChatIcon from './components/chatIcon';
import data from './data/data';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Event data={data} />
        <ChatIcon />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    position: 'relative'
  },
});

export default App;
