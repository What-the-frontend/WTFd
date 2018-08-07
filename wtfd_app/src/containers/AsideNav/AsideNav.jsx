import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AsideNavItem from './AsideNavItem';
import { ORGANIZATION_NAME } from '../../config';

const Nav = styled.nav`
  float: left;
  width: 70px;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  background-color: #9b9b9b;
`

class AsideNav extends Component {
  state = {
    repos: []
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(`https://api.github.com/orgs/${ORGANIZATION_NAME}/repos`);
      this.setState({
        repos: response.data.map(repo => repo.name)
      });
    } catch (e) {
      console.log(e);
    }
  }

  onNavItemClick = async e => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${ORGANIZATION_NAME}/${e.currentTarget.id}/git/trees/master`);
      this.setState({
        tree: response.data.tree
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Nav>
        {
          this.state.repos.map(name =>
            name !== 'WTFd'
              ? <AsideNavItem
                  name={name}
                  onNavItemClick={this.onNavItemClick}
                  key={name}/> : null
          )
        }
      </Nav>
    );
  }
}

export default AsideNav;