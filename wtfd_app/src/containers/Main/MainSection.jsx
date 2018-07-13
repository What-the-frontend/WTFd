import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Section = styled.section`
  width: 850px;
  margin: auto;
`

const ReadMeContent = styled.article`
  font-size: 20px;
  color: #7b7b7b;
`

const MainSection = ({ readme }) =>
  <Section>
    <ReadMeContent>
      <ReactMarkdown source={readme}/>
      <ReactMarkdown source={readme}/>
      <ReactMarkdown source={readme}/>
    </ReadMeContent>
  </Section>

export default MainSection;