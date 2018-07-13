import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
`

const Content = styled.nav`
  width: 1140px;
  height: 20px;
  margin: auto;
  padding: 21px 0;
`

const NavItem = styled(Link)`
  margin-right: 15px;
  color: #7b7b7b;
  text-decoration: none;
`

const HeaderNavigation = () =>
  <Wrapper>
    <Content>
      <NavItem to='/'>HOME</NavItem>
      <NavItem to='/'>GITHUB</NavItem>
    </Content>
  </Wrapper>

export default HeaderNavigation;