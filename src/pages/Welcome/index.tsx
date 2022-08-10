import React from 'react';
import styled from 'styled-components';
import typography from 'theme/constants/typography';
import colors from 'theme/constants/colors';

const Heading = styled.h1`
  margin: 12px;
  font-size: 38px;
  font-weight: ${typography.fontWeights.bold};
`;

const SubHeading = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: ${typography.fontWeights.regular};
  color: ${colors.darkGray};
`;

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

function Welcome() {
  return (
    <Grid
      style={{
        gridTemplateRows: '2fr repeat(1fr, 3)',
      }}
    >
      <Flex>
        <Heading>
          Welcome! First things first...
        </Heading>
        <SubHeading>
          You can always change them later.
        </SubHeading>
      </Flex>
    </Grid>
  );
}

export default Welcome;
