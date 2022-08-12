import React, { useState } from 'react';
import styled from 'styled-components';
import typography from 'theme/constants/typography';
import colors from 'theme/constants/colors';

import Button from 'components/Button';

import { RiUserFill, RiTeamFill } from 'react-icons/ri';

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

const StyledOption = styled.div`
  display: inline;
`;

const StyledRadio = styled.input`
  display: none;
  z-index: -1;

  &:checked + label {
    border-color: ${colors.purple};
    backgroud-color: ${colors.white};
    color: ${colors.black};
  }
`;

const StyledLabel = styled.label`
  padding: 32px 16px 32px 16px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  display: inline-block;
`;

const Form = styled.form`
  display: grid;
`;

interface UsageProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

function Usage({ setActiveStep }: UsageProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState('For myself');

  function onOptionChange(selected) {
    setSelectedOption(selected);
  }

  const onSubmit = event => {
    event.preventDefault();

    setActiveStep(3);
  };

  const usageOptions = [
    {
      icon: '1',
      title: 'For myself',
      desc: 'Write better. Think more clearly. Stay organized.',
    },
    {
      icon: 'N',
      title: 'With my team',
      desc: 'Wikis, docs, tasks and projects, all in one place.',
    },
  ];

  return (
    <Grid
      style={{
        gridTemplateRows: '1fr 2fr',
        paddingTop: '10px',
      }}
    >
      <Flex>
        <Heading>How are you planning to use Eden?</Heading>
        <SubHeading>We&apos;ll streamline your setup experience accordingly.</SubHeading>
      </Flex>
      <Flex
        style={{
          flexDirection: 'row',
          gap: '24px',
          justifyContent: 'center',
          padding: '22px',
          paddingLeft: '124px',
          paddingRight: '124px',
        }}
      >
        {usageOptions.map(option => (
          <StyledOption key={option.title}>
            <StyledRadio
              type="radio"
              id={option.title}
              checked={selectedOption === option.title}
              onChange={() => {
                onOptionChange(option.title);
              }}
            />
            <StyledLabel htmlFor={option.title}>
              {option.icon === '1' ? (
                <>
                  {selectedOption === 'For myself' ? (
                    <RiUserFill size="28px" color={colors.purple} />
                  ) : (
                    <RiUserFill size="28px" color={colors.black} />
                  )}
                </>
              ) : (
                <>
                  {selectedOption === 'With my team' ? (
                    <RiTeamFill size="28px" color={colors.purple} />
                  ) : (
                    <RiTeamFill size="28px" color={colors.black} />
                  )}
                </>
              )}
              <Heading
                style={{
                  fontSize: '18px',
                  marginLeft: '0',
                }}
              >
                {option.title}
              </Heading>
              <SubHeading
                style={{
                  fontSize: '18px',
                  marginLeft: '0',
                  color: `${colors.darkGray}`,
                }}
              >
                {option.desc}
              </SubHeading>
            </StyledLabel>
          </StyledOption>
        ))}
      </Flex>
      <Form onSubmit={onSubmit}>
        <Button marginTop="2%" type="submit">
          Create Workspace
        </Button>
      </Form>
    </Grid>
  );
}

export default Usage;
