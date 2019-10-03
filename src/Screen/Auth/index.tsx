import React from 'react';
import {Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Auth = ({navigation}: Props) => {
  const _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    navigation.navigate('MainTab');
  };
  return (
    <Container>
      <Text>Auth</Text>
      <Button title="Login" onPress={_login} />
    </Container>
  );
};

export default Auth;
