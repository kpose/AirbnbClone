import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

import {CustomButton, CustomInput} from '../../components';

const animation = require('../../assets/LottieAnimation/traveling.json');

const Signup = () => {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <LottieView
        source={animation}
        autoPlay
        style={{
          height: 200,
          width: 200,
        }}
      />

      <CustomInput
        placeholder={'Enter Email'}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <CustomInput
        placeholder={'Enter Username'}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <CustomInput
        placeholder={'Enter Password'}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <View style={styles.loginArea}>
        <Text style={{fontSize: 16}}>Already have an acount? </Text>
        <TouchableOpacity onPress={() => console.log('login here')}>
          <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 16}}>
            Login here
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        title={'Sign up'}
        onPress={() => console.log('signup pressed')}
      />
    </KeyboardAvoidingView>
  );
};

export default Signup;
