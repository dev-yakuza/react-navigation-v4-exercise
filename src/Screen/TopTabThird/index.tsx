import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const TopTabThird = ({}: Props) => {
  return (
    <Container>
      <Text>TopTabThird Screen</Text>
    </Container>
  );
};

export default TopTabThird;
