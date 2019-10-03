import React, {useEffect} from 'react';
import {Text} from 'react-native';
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
interface State {}

const AuthLoadingScreen = ({navigation}: Props) => {
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'MainTab' : 'Auth');
  };

  useEffect(() => {
    setTimeout(() => {
      _bootstrapAsync();
    }, 1000);
  }, []);

  return (
    <Container>
      <Text>Loading...</Text>
    </Container>
  );
};

export default AuthLoadingScreen;
