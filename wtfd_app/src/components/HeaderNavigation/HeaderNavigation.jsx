import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
`

const Navigation = styled.nav`
  width: 850px;
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
  <Header>
    <Navigation>
      <NavItem to='/'>HOME</NavItem>
      <NavItem to='/'>GITHUB</NavItem>
    </Navigation>
  </Header>

export default HeaderNavigation;