import React, { Component } from 'react';
import axios from 'axios';
import AsideNav from './AsideNav';
import { ORGANIZATION_NAME } from '../../config';

class AsideMenu extends Component {
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

  render() {
    return (
      <AsideNav repoNames={this.state.repos} />
    );
  }
}

export default AsideMenu;