import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Events</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 30,
    backgroundColor: 'white',
    marginHorizontal: 120
  },
  text: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 5
  },
});

export default Header;
