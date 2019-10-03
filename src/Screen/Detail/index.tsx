import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const Detail = ({}: Props) => {
  return (
    <Container>
      <Text>Detail Screen</Text>
    </Container>
  );
};

export default Detail;
