import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const FullDetail = ({}: Props) => {
  return (
    <Container>
      <Text>FullDetail Screen</Text>
    </Container>
  );
};

export default FullDetail;
