import React from 'react';
import styled from 'styled-components';
import { json } from '..';

const SwipeBlockLength = () => {
  return 340 * json.length + 15 * json.length;
};

const SwipeListBlock = styled.div`
  position: relative;
  width: 360px;
  height: 125px;
  margin-bottom: 8px;
  overflow: hidden;
  #VirtualBlock {
    position: relative;
    width: ${SwipeBlockLength}px;
    height: inherit;
  }
`;

const SwipeItemBlock = styled.div`
  position: relative;
  float: left;
  width: 340px;
  height: inherit;

  box-shadow: 0 -0.2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 10px;

  margin: 0 5px 0 0px;

  &:first-child {
    margin-left: 10px;
  }

  .swipeItem-container {
    width: 100%;
    height: 100%;
  }
`;

let startnextPosX = 0;
let startnextPosY = 0;
let offsetX = 0;
let offsetY = 0;
let postionX = 0;
let postionY = 0;

const onTouchStart = (e) => {
  startnextPosX = e.touches[0].pageX;
  startnextPosY = e.touches[0].pageY;
};

const onTouchMove = (e) => {
  offsetX = postionX + (e.targetTouches[0].pageX - startnextPosX);
  offsetY = postionY + (e.targetTouches[0].pageY - startnextPosY);

  const $VirtualBlock = document.getElementById('VirtualBlock');
  $VirtualBlock.style.transitionDuration = '250ms';

  if (offsetY > 20) {
    $VirtualBlock.style.transform = `translate3d(0px, ${offsetY}px, 0px)`;
  }

  $VirtualBlock.style.transform = `translate3d(${offsetX}px, 0px, 0px)`;
};

const onTouchEnd = (e) => {
  const sumX = postionX + (e.changedTouches[0].pageX - startnextPosX);
  const sumY = postionY + (e.changedTouches[0].pageY - startnextPosY);

  let nextPosX = Math.round(sumX / 345) * 345;

  let nextPosY = Math.round(sumY / 125) * 125;

  if (nextPosX > 0) {
    nextPosX = 0;
  } else if (nextPosX < -(345 * (json.length - 1))) {
    nextPosX = -(345 * (json.length - 1));
  }

  const $VirtualBlock = document.getElementById('VirtualBlock');
  $VirtualBlock.style.transitionDuration = '250ms';

  if (nextPosY < 67.5) {
    nextPosY = 0;
  } else {
    nextPosY = 110;
  }

  if (nextPosX > 0) {
    nextPosX = 0;
  } else if (nextPosX < -(345 * (json.length - 1))) {
    nextPosX = -(345 * (json.length - 1));
  }

  $VirtualBlock.style.transform = `translate3d(${nextPosX}px, ${nextPosY}px, 0px)`;

  postionX = nextPosX;
  postionY = nextPosY;
};

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 10px 12px 10px;

  .swipeItem-food {
    width: 84px;
    height: 84px;
  }

  .downBar {
    margin-top: 8px;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StringInfoContainer = styled.div`
  width: 226px;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  li {
    width: 100%;
    height: 25%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li span {
    float: left;
  }

  .StringInfo-identifier {
    height: 26px;
    object-fit: contain;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -0.9px;
    text-align: left;
    color: #202020;
  }

  .StringInfo-name {
    max-width: 120px;
    line-height: 1;
  }

  .StringInfo-place {
    position: relative;
    z-index: 0;
    background-color: #ffffff;
    float: right;
    height: 19px;
    object-fit: contain;
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -0.65px;
    text-align: left;
    color: var(--greyish-brown);
  }

  .StringInfo-category {
    height: 19px;
    object-fit: contain;
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.65px;
    text-align: left;
    color: var(--greyish-brown);
  }

  .StringInfo-keyward {
    max-width: 226px;
    height: 19px;

    object-fit: contain;
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.65px;
    text-align: left;
    color: #9e9e9e;
  }

  .StringInfo-reaction {
    display: flex;
    align-items: center;
  }

  .StringInfo-overall {
    object-fit: contain;
    height: 19px;
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -0.65px;
    text-align: left;
    color: #09d2e5;

    span {
      float: none;
      height: inherit;
      font-weight: 500;

      color: #505050;
    }
  }

  .StringInfo-user {
    display: flex;
    align-items: center;
    height: 19px;
    margin-left: 8.9px;

    object-fit: contain;
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -0.65px;
    text-align: left;
    color: var(--greyish-brown);

    div {
      display: inline;
      height: 100%;
      margin-left: 3px;
    }
  }

  .StringInfo-like {
    display: flex;
    align-items: center;
    height: 19px;
    object-fit: contain;

    margin-left: 8.8px;

    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -0.65px;
    text-align: left;
    color: var(--greyish-brown);

    div {
      display: inline;
      height: 100%;
      margin-left: 2.7px;
    }
  }
`;

const KeywordItem = ({ word }) => {
  return <>{word}</>;
};

const InfoItem = ({ restaurant }) => {
  const {
    area,
    branch,
    category,
    distance,
    favorites_cnt,
    keyword,
    nm,
    review_cnt,
    score,
    user_score,
    _id,
  } = restaurant;
  return (
    <StringInfoContainer>
      <ul>
        <li className="StringInfo-identifier">
          <span className="StringInfo-name">
            {_id}. {nm} {branch}
          </span>

          <span className="StringInfo-place">
            {area} | {distance}
          </span>
        </li>
        <li>
          <span className="StringInfo-category">{category}</span>
        </li>
        <li className="StringInfo-keyward">
          {keyword.map((elem, index) => {
            if (index === keyword.length - 1) {
              return <KeywordItem key={index} word={`#${elem}`} />;
            } else {
              return <KeywordItem key={index} word={`#${elem}, `} />;
            }
          })}
        </li>
        <li className="StringInfo-reaction">
          <span className="StringInfo-overall">
            {score}
            <span>점</span>
          </span>
          <span className="StringInfo-user">
            <img src={`${process.env.PUBLIC_URL}/img/star.png`} alt="" />
            <div>
              {user_score} ({review_cnt}명)
            </div>
          </span>
          <span className="StringInfo-like">
            <img src={`${process.env.PUBLIC_URL}/img/like.png`} alt="" />
            <div>{favorites_cnt}</div>
          </span>
        </li>
      </ul>
    </StringInfoContainer>
  );
};

const SwipeItem = ({ restaurant }) => {
  return (
    <SwipeItemBlock>
      <div
        className="swipeItem-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <FlexBox>
          <img
            className="downBar"
            src={`${process.env.PUBLIC_URL}/img/bar.png`}
            alt=""
          />
          <InfoBox>
            <img className="swipeItem-food" src={restaurant.image} alt="" />
            <InfoItem restaurant={restaurant} />
          </InfoBox>
        </FlexBox>
      </div>
    </SwipeItemBlock>
  );
};

const SwipeList = () => {
  let cnt = 1;

  return (
    <>
      <SwipeListBlock>
        <div id="VirtualBlock">
          {json.map((elem) => {
            elem._id = cnt++;
            return <SwipeItem key={elem._id} restaurant={elem} />;
          })}
        </div>
      </SwipeListBlock>
    </>
  );
};

export default SwipeList;
