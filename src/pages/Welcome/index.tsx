import React, { useState } from 'react';
import styled from 'styled-components';
import typography from 'theme/constants/typography';
import colors from 'theme/constants/colors';

import Input from 'components/Input';
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

const Form = styled.form`
  display: grid;
  position: relative;
  grid-template-rows: repeat(3, 0.5fr);
`;

interface WelcomeProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  setDisplayName: React.Dispatch<React.SetStateAction<string>>;
}

function Welcome({ setActiveStep, setDisplayName }: WelcomeProps): JSX.Element {
  const [formData, setFormData] = useState({
    fname: '',
    dname: '',
  });

  const { fname, dname } = formData;

  const onChange = event => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    setDisplayName(dname);
    setActiveStep(1);
  };

  return (
    <Grid
      style={{
        gridTemplateRows: '1fr 2fr',
      }}
    >
      <Flex>
        <Heading>Welcome! First things first...</Heading>
        <SubHeading>You can always change them later.</SubHeading>
      </Flex>
      <Form onSubmit={onSubmit}>
        <Input
          title="Full Name"
          type="text"
          optional={false}
          placeholder="Steve Jobs"
          required
          id="fname"
          name="fname"
          value={fname}
          onChange={onChange}
        />
        <Input
          title="Display Name"
          optional={false}
          type="text"
          placeholder="Steve"
          required
          id="dname"
          name="dname"
          value={dname}
          onChange={onChange}
        />
        <Button marginTop="1.35%" type="submit">
          Create Workspace
        </Button>
      </Form>
    </Grid>
  );
}

export default Welcome;
