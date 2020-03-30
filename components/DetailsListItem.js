import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from './DefaultText';

const DetailsListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export default DetailsListItem;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});
