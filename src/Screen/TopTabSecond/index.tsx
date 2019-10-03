import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const TopTabSecond = ({}: Props) => {
  return (
    <Container>
      <Text>TopTabSecond Screen</Text>
    </Container>
  );
};

export default TopTabSecond;
