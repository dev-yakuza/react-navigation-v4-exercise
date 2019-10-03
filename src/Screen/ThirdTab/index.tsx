import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const ThirdTab = ({}: Props) => {
  return (
    <Container>
      <Text>Third Tab</Text>
    </Container>
  );
};

export default ThirdTab;
