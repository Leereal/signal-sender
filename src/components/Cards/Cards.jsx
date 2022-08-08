import React, { useEffect, useState } from 'react';
import './Cards.css';
import axios from 'axios';
import { io } from 'socket.io-client';
import Card from '../Card/Card';

const socket = io(process.env.REACT_APP_END_POINT);

const Cards = () => {
  const [signals, setSignals] = useState([]);
  const [errorMsg, setErrorMsg] = useState({});
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_POINT + '/signals')
      .then((response) => {
        // handle success
        let signals = response.data.signals;
        // let searchedSignals = signals.filter((signal) =>
        //   signal.symbol.toLowerCase().includes(this.state.search.toLowerCase())
        // );
        // console.log(this.state.search);
        setSignals(signals);
      })
      .catch((error) => {
        this.setState({ errorMsg: error });
        console.log(error);
      });

    socket.on('post_signal', (new_signal) => {
      setSignals((prevState) => [new_signal, ...prevState]);
    });
    socket.on('connection', () => {
      // socket.send('hekl');
      // console.log('Liberty Socket');
    });
  }, []);
  console.log(signals);

  return (
    <div className={signals.length ? 'Cards' : ''}>
      {signals.length ? (
        signals.map((signal) => {
          return (
            <div className="parentContainer" key={signal._id}>
              <Card signal={signal} />
            </div>
          );
        })
      ) : (
        <h1 className="noSignals">No signals to display</h1>
      )}
    </div>
  );
};

export default Cards;
