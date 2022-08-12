import React, { useState } from 'react';
import styled from 'styled-components';
import typography from 'theme/constants/typography';
import colors from 'theme/constants/colors';

import Input from 'components/Input';
import Button from 'components/Button';
import CustomInput from 'components/CustomInput';

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

interface SetupProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

function Setup({ setActiveStep }: SetupProps): JSX.Element {
  const [formData, setFormData] = useState({
    wname: '',
    wurl: '',
  });

  const { wname, wurl } = formData;

  const onChange = event => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    
    setActiveStep(2);
  };
  return (
    <Grid
      style={{
        gridTemplateRows: '1fr 2fr',
      }}
    >
      <Flex>
        <Heading>Let&apos;s set up a home for all your work</Heading>
        <SubHeading>You can always create another workspace later.</SubHeading>
      </Flex>
      <Form onSubmit={onSubmit}>
        <Input
          title="Workspace Name"
          optional={false}
          type="text"
          placeholder="Eden"
          required
          id="wname"
          name="wname"
          value={wname}
          onChange={onChange}
        />
        <CustomInput
          title="Workspace URL"
          url="www.eden.com/"
          optional
          type="text"
          placeholder="Example"
          required={false}
          id="wurl"
          name="wurl"
          value={wurl}
          onChange={onChange}
        />
        <Button marginTop="2%" type="submit">
          Create Workspace
        </Button>
      </Form>
    </Grid>
  );
}

export default Setup;
