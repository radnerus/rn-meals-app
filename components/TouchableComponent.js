import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';

const TouchableComponent = props => {
  const CustomTouchableComponent =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <CustomTouchableComponent {...props}>
      {props.children}
    </CustomTouchableComponent>
  );
};

export default TouchableComponent;
