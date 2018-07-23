import React from 'react';
import styled from 'styled-components';
import AsideDirTreeItem from './AsideDirTreeItem';

const Wrapper = styled.div`
  float: left;
  width: 220px;
  height: 100vh;
  padding: 10px;
  background: #ddd;
  box-sizing: border-box;
`

const AsideDirTree = ({ tree }) => {
  return (
    <Wrapper>
      {
        tree.map(treeElement =>
          <AsideDirTreeItem
            info={treeElement}
            key={treeElement.sha}/>
        )
      }
    </Wrapper>
  );
}

export default AsideDirTree;