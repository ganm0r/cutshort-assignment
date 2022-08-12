import React from 'react';
import styled from 'styled-components';
import typography from 'theme/constants/typography';
import colors from 'theme/constants/colors';

import Button from 'components/Button';

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

interface FinalProps {
  displayName: string;
}

function Final({ displayName }: FinalProps): JSX.Element {
  return (
    <Grid
      style={{
        gridTemplateRows: '1fr 2fr',
        paddingTop: '101px',
      }}
    >
      <Flex>
        <img src="/eden-check.png" alt="eden-png" height={96} />
      </Flex>
      <Flex>
        <Heading>Congratulations, {displayName}</Heading>
        <SubHeading>You have completed onboarding, you can start using the Eden!</SubHeading>
      </Flex>
      <Button marginTop="1.35%" type="submit">
        Launch Eden
      </Button>
    </Grid>
  );
}

export default Final;
