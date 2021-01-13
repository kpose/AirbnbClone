import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: any;
  secureTextEntry?: boolean;
  keyboardType?: string;
};

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        placeholderTextColor="#555351"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;
