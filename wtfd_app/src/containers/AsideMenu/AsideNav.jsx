import React from 'react';
import styled from 'styled-components';
import AsideNavItem from './AsideNavItem';

const Nav = styled.nav`
  float: left;
  width: 70px;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  background-color: #9b9b9b;
`

const AsideNav = ({ repoNames, onNavItemClick }) =>
  <Nav>
    {
      repoNames.map(name =>
        name !== 'WTFd'
          ? <AsideNavItem
              name={name}
              onNavItemClick={onNavItemClick}
              key={name}/> : null
      )
    }
  </Nav>

export default AsideNav;