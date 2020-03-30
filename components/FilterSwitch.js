import React from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin: 10
  },
  label: {
    fontFamily: 'open-sans'
  }
});
