import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const CustomButton = ({title, onPress}: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
