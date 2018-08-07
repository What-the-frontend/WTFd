import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Section = styled.section`
  float: left;
  width: calc(100% - 290px);
  height: 100vh;
  padding-left: 50px;
  padding-right: 100px;
  box-sizing: border-box;
  overflow: scroll;
`

const ReadMeContent = styled.article`
  font-size: 20px;
  color: #7b7b7b;
`

const MainSection = ({ readme }) =>
  <Section>
    <ReadMeContent>
      <ReactMarkdown source={readme}/>
    </ReadMeContent>
  </Section>

export default MainSection;