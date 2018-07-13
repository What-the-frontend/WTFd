import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { HeaderNavigation } from '../../components';
import MainSection from './MainSection';

class Main extends Component {
  state = {
    readme: ''
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('https://api.github.com/repos/What-the-frontend/WTFd/readme');
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