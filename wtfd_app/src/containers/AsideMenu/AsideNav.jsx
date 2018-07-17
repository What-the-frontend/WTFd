import React from 'react';
import styled from 'styled-components';
import AsideNavItem from './AsideNavItem';

const Nav = styled.nav`
  float: left;
  width: 50px;
  height: 100vh;
  padding: 10px;
  background-color: #9b9b9b;
`

const AsideNav = ({ repoNames }) =>
  <Nav>
    {
      repoNames.map(name =>
        name !== 'WTFd' ? <AsideNavItem name={name} key={name}/> : null
      )
    }
  </Nav>

export default AsideNav;