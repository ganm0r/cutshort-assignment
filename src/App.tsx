import React, { useState } from 'react';
import styled from 'styled-components';

import { Stepper, Step } from 'react-form-stepper';

import colors from 'theme/constants/colors';
import typography from 'theme/constants/typography';

import Welcome from 'pages/Welcome';
import Usage from 'pages/Usage';
import Setup from 'pages/Setup';
import Final from 'pages/Final';

import MainContainer from 'components/MainContainer';

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  margin: 0;
`;

const StyledDiv = styled.div`
  margin: 0;
`;

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [displayName, setDisplayName] = useState('');

  return (
    <MainContainer>
      <Grid
        style={{
          gridTemplateRows: 'repeat(1fr, 2) 2fr 3fr',
          gap: '64px',
          width: 'max-content',
        }}
      >
        <Flex
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            margin: '0',
            gap: '16px',
          }}
        >
          <img src="/eden-logo.png" alt="eden-logo" height={36} style={{ marginTop: '4px' }} />
          <Heading
            style={{
              fontSize: '36px',
            }}
          >
            Eden
          </Heading>
        </Flex>
        <Stepper
          activeStep={activeStep}
          connectorStateColors
          styleConfig={{
            activeBgColor: `${colors.purple}`,
            activeTextColor: `${colors.white}`,
            inactiveBgColor: `${colors.lightGray}`,
            inactiveTextColor: `${colors.darkGray}`,
            completedBgColor: `${colors.purple}`,
            completedTextColor: `${colors.white}`,
            size: '3em',
            circleFontSize: '18px',
            labelFontSize: '0px',
            borderRadius: '50%',
            fontWeight: `${typography.fontWeights.bold}`,
          }}
          connectorStyleConfig={{
            activeColor: `${colors.purple}`,
            disabledColor: `${colors.lightGray}`,
            completedColor: `${colors.purple}`,
            size: '2px',
            style: 'solid',
          }}
        >
          <Step label="" onClick={() => setActiveStep(0)} />
          <Step label="" onClick={() => setActiveStep(1)} />
          <Step label="" onClick={() => setActiveStep(2)} />
          <Step label="" onClick={() => setActiveStep(3)} />
        </Stepper>
        <StyledDiv
          style={{
            width: '676px',
            height: '500px',
          }}
        >
          {activeStep === 0 && (
            <Welcome setActiveStep={setActiveStep} setDisplayName={setDisplayName} />
          )}
          {activeStep === 1 && <Setup setActiveStep={setActiveStep} />}
          {activeStep === 2 && <Usage setActiveStep={setActiveStep} />}
          {activeStep === 3 && <Final displayName={displayName} />}
        </StyledDiv>
      </Grid>
    </MainContainer>
  );
}

export default App;
