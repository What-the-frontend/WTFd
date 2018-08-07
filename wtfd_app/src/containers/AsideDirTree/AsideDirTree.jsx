import React, { Component } from 'react';
import styled from 'styled-components';
import AsideDirTreeItem from './AsideDirTreeItem';
import AsideController from './AsideController';

const Wrapper = styled.div`
  float: left;
  width: 220px;
  height: 100vh;
  padding: 10px;
  background: #ddd;
  box-sizing: border-box;
`

class AsideDirTree extends Component {
  state = {
    tree: []
  }

  render() {
    return (
      <Wrapper>
        <AsideController />
        {
          this.state.tree.map(treeElement =>
            <AsideDirTreeItem
              info={treeElement}
              key={treeElement.sha}/>
          )
        }
      </Wrapper>
    );
  }
}

export default AsideDirTree;