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

const TopTapFirst = ({navigation}: Props) => {
  const _showDetail = (): void => {
    navigation.navigate('Detail');
  };

  const _showFullDetail = (): void => {
    navigation.navigate('FullDetail');
  };

  const _logout = (): void => {
    AsyncStorage.removeItem('userToken');
    navigation.navigate('Auth');
  };
  const _navigateSecondBottomTab = (): void => {
    navigation.navigate('SecondTab');
  };

  return (
    <Container>
      <Text>TopTabFirst Screen</Text>
      <Button title="Show Detail in Tab" onPress={_showDetail} />
      <Button title="Show Full Size Detail" onPress={_showFullDetail} />
      <Button
        title="navigate second bottom tab"
        onPress={_navigateSecondBottomTab}
      />
      <Button title="Logout" onPress={_logout} />
    </Container>
  );
};

export default TopTapFirst;
