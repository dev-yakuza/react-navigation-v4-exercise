import React from 'react';
import {Text} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const SecondTab = ({}: Props) => {
  return (
    <Container>
      <Text>Second Tab</Text>
    </Container>
  );
};

export default SecondTab;
