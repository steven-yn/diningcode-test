import React from 'react';
import SwipeList from './SwipeList';
import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InterfaceBox = styled.div`
  display: flex;
  justify-content: center;
  width: 360px;
  height: 640px;
`;

const FlexBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: inherit;
`;

const MainInterface = () => {
  return (
    <Wrap>
      <InterfaceBox>
        <img
          src={`${process.env.PUBLIC_URL}/img/bg.png`}
          className="MainInterface-bg"
          alt="background-img"
        />
        <FlexBox>
          <img
            src={`${process.env.PUBLIC_URL}/img/group145.png`}
            className="MainInterface-group"
            alt="head"
          />
          <SwipeList />
        </FlexBox>
      </InterfaceBox>
    </Wrap>
  );
};

export default MainInterface;
