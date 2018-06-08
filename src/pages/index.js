/*
* NOTE: The Babel plugin will automatically process the `tw()` function, which
* means we don’t actually need to import it. ESLint will complain about this,
* however, so we need to add `tw` as a global variable.
*/

/* global tw */
import React from 'react';
import styled from 'react-emotion';
import '../../global.css'

const Container = styled('div')`
  ${tw('bg-white container my-8 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans')};
`;

const Wrapper = styled('div')`
${tw('sm:flex sm:items-center px-6 py-4')};
`;

const Avatar = styled('img')`
${tw('block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0')};
`;

const TextContainer = styled('div')`
${tw('text-center sm:text-left sm:flex-grow')};
`;

const TextSpacing = styled('div')`
${tw('mb-4')};
`;

const Company = styled('p')`
${tw('my-0 text-sm leading-tight text-grey-dark')};
`;

const Name = styled('h1')`
${tw('my-0 text-xl leading-tight')};
`;

const Button = styled('button')`
${tw([
  'bg-white',
  'border-purple',
  'border',
  'font-semibold',
  'hover:bg-purple',
  'hover:text-white',
  'leading-normal',
  'px-4',
  'py-1',
  'rounded-full',
  'text-purple',
  'text-xs'
])};
`;

const Graf = styled('p')`
${tw('m-0 text-md leading-normal')}
`;

export default () => (
  <div>
    <Graf>This Text should be right at the top</Graf>
    <Container>
      <p>This text should be 1rem or 1.15rem or 1.3rem, based on viewport width.</p>
      <Wrapper>
        <Avatar
        src="https://lengstorf.com/images/jason-lengstorf.jpg"
        alt="Jason Lengstorf"
        />
        <TextContainer>
          <TextSpacing>
            <Name>Jason Lengstorf</Name>
            <Company>Developer at Gatsby</Company>
          </TextSpacing>
          <Button>High Five</Button>
        </TextContainer>
      </Wrapper>
    </Container>
  </div>
);
