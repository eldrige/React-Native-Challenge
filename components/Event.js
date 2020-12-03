import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Event = ({data}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View>
      {data.map((ev) => {
        const {date, title, time, location, id, details} = ev;
        return (
          <View style={styles.container} key={id}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.divider}></View>
            <Text style={styles.text}>{time}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text
              onPress={() => setShowDetails(!showDetails)}
              style={styles.details}>
              + Event details
            </Text>
            {showDetails && <Text style={styles.title}>{details}</Text>}
            <View style={styles.separator}></View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 17,
    marginTop: 16,
  },
  date: {
    fontSize: 25,
    color: 'white',
  },
  title: {
    fontSize: 17,
    color: 'white',
    marginTop: 15,
  },
  divider: {
    borderBottomColor: '#878588',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  location: {
    fontSize: 15,
    color: '#878588',
    marginTop: 20,
  },
  details: {
    fontSize: 15,
    color: '#cc8b53',
    marginTop: 20,
  },
  separator: {
    borderBottomColor: '#878588',
    borderBottomWidth: 3,
    marginTop: 20,
  },
});

export default Event;
