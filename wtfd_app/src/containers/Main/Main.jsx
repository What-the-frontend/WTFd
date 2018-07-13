import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { HeaderNavigation } from '../../components';
import MainSection from './MainSection';

import { USER_NAME, REPOSITORY_NAME } from '../../config';

class Main extends Component {
  state = {
    readme: ''
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${USER_NAME}/${REPOSITORY_NAME}/readme`);
      this.setState({
        readme: atob(response.data.content)
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Fragment>
        <HeaderNavigation />
        <MainSection readme={this.state.readme} />
      </Fragment>
    );
  }
}

export default Main;