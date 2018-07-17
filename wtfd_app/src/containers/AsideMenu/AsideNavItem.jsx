import React from 'react';
import styled from 'styled-components';
import { ORGANIZATION_NAME } from '../../config';

const NavItem = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  padding: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const AsideNavItem = ({ name }) =>
  <NavItem>
    <ItemImg
      src={`https://raw.githubusercontent.com/${ORGANIZATION_NAME}/${name}/master/repo-logo.png`}
      alt={name}/>
  </NavItem>

export default AsideNavItem;