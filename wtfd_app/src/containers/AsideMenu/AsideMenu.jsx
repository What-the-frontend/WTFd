import React, { Component, Fragment } from 'react';
import axios from 'axios';
import AsideNav from './AsideNav';
import AsideDirTree from './AsideDirTree';
import { ORGANIZATION_NAME } from '../../config';

class AsideMenu extends Component {
  state = {
    repos: [],
    tree: []
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
      console.log(response);
      this.setState({
        tree: response.data.tree
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Fragment>
        <AsideNav
          repoNames={this.state.repos}
          onNavItemClick={this.onNavItemClick}/>
        <AsideDirTree
          tree={this.state.tree}/>
      </Fragment>
    );
  }
}

export default AsideMenu;