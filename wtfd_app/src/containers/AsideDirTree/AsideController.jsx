import React from 'react';
import styled from 'styled-components';
import backBtn from './res/back_btn.png';

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
`

const ImgButton = styled.img`
  float: right;
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`

const AsideController = () =>
  <Wrapper>
    <ImgButton src={backBtn} />
  </Wrapper>

export default AsideController;