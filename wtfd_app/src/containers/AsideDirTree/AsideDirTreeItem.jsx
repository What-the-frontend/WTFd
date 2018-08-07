import React from 'react';
import styled from 'styled-components';
import Markdown from './res/file_md.png';
import Tree from './res/tree_close.png';

const TreeElement = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding-left: 10px;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
  }
`

const TreeElementIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;

  ${props => {
    if (props.type === 'tree')
      return `content: url(${Tree})`;
    else if (props.type === 'blob')
      return `content: url(${Markdown})`;
  }}
`

const AsideDirTreeItem = ({ info }) => {
  console.log(info);
  return (
    <TreeElement type={info.type}>
      <TreeElementIcon type={info.type} />{info.path}
    </TreeElement>
  );
}

export default AsideDirTreeItem;