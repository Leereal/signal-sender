import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Card.css';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { FiZoomIn, FiMessageCircle, FiThumbsUp, FiX } from 'react-icons/fi';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { Tooltip } from '@mui/material';
import moment from 'moment';

const Card = ({ signal }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {expanded ? (
        <ExpandedCard param={signal} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={signal} setExpanded={() => setExpanded(true)} />
      )}
    </div>
  );
};

function CompactCard({ param, setExpanded }) {
  return (
    <motion.div className="CompactCard" layoutId="expandableCard">
      <div className="signalStatus">
        <span className="symbolName">
          {param.symbol.toUpperCase()}
          {param.type === 'sell' ? (
            <Tooltip title="SELL SIGNAL" placement="top-end">
              <span>
                <IoArrowDown />
              </span>
            </Tooltip>
          ) : (
            <Tooltip title="BUY SIGNAL" placement="top-end">
              <span>
                <IoArrowUp />
              </span>
            </Tooltip>
          )}
        </span>
        <span>Entry: {param.open_price}</span>
        <span>SL: {param.stop_loss}</span>
        <span>{moment(param.createdAt).fromNow()}</span>
        <PacmanLoader
          loading={true}
          color="#043a10"
          size={15}
          speedMultiplier={1}
        />
      </div>
      <div className="detail">
        <span>
          <img className="currencyImage" src="images/eurusd.jpeg" alt="" />
        </span>
        <span className="takeProfit">TP1 : {param.open_price}</span>
        <span className="takeProfit">TP2 : {param.open_price}</span>
        <span className="takeProfit">View More</span>

        <div>
          <span className="comIcons">
            <Tooltip title="Open Signal" placement="left-start">
              <span>
                <FiZoomIn onClick={setExpanded} />
              </span>
            </Tooltip>
            <Tooltip title="Chat Us" placement="left-start">
              <span>
                <FiMessageCircle />
              </span>
            </Tooltip>
            <Tooltip title="Like This" placement="left-start">
              <span>
                <FiThumbsUp />
              </span>
            </Tooltip>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

//Expanded Card
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div className="ExpandedCard" layoutId="expandableCard">
      <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}>
        <FiX onClick={setExpanded} />
      </div>
      <span>{param.symbol}</span>
      <div className="signalContainer">
        <div className="row">
          <span>Status</span>
          <span>Closed</span>
        </div>
        <div className="row">
          <span>Open Price Range</span>
          <span>1.12321 - 123221</span>
        </div>
        <div className="row">
          <span>Stop Loss</span>
          <span>1.32332</span>
        </div>
        <div className="row">
          <span>Target 1</span>
          <span>1.2121</span>
        </div>
        <div className="row">
          <span>Price Opened</span>
          <span>1.12001</span>
        </div>
        <div className="row">
          <span>Closed Price</span>
          <span>1.130210</span>
        </div>
        <div className="row">
          <span>Time Posted</span>
          <span>+2GMT 2:00</span>
        </div>
        <div className="row">
          <span>Type</span>
          <span>BUY</span>
        </div>
        <div className="row">
          <span>Profit Status</span>
          <span>Won</span>
        </div>
        <div className="row">
          <span>Result</span>
          <span>+20 pips</span>
        </div>
        <div className="row">
          <span>Message Here</span>
        </div>
      </div>
      <span>Last 2 minutes</span>
    </motion.div>
  );
}

export default Card;
