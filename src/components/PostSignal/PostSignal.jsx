import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import './PostSignal.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PostSignal = ({ handleClose, handleOpen, open }) => {
  const [signal, setSignal] = useState({});
  const [targets, setTargets] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    if (id.startsWith('target')) {
      setTargets((prevState) => [...prevState, value]);
      console.log('Here in if');
    } else {
      setSignal((prevState) => ({ ...prevState, [id]: value }));
      console.log('here in else');
    }
  };
  function handlePost() {
    console.log('Array', targets);
    console.log('Object', signal);
    axios
      .post(
        process.env.REACT_APP_BACKEND_POINT + '/signals',
        {
          signal,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="PostSignalModal"
      >
        <Box sx={style} className="PostSignalModalBox">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post New Signal
          </Typography>
          <div className="inputRow">
            {/* Symbol  */}
            <FormControl error variant="standard">
              <Autocomplete
                id="symbol"
                options={currencies}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Symbol"
                    variant="standard"
                    onChange={handleChange}
                  />
                )}
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>

            {/* Direction Type  */}
            <FormControl variant="standard" sx={{ minWidth: 200 }}>
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                value={signal.type || ''}
                onChange={handleChange}
                label="Type"
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="buy">BUY</MenuItem>
                <MenuItem value="sell">SELL</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="inputRow">
            <TextField
              id="entry_price"
              onChange={handleChange}
              label="Open Price Range"
              variant="standard"
            />
            <TextField
              id="stop_loss"
              onChange={handleChange}
              label="Stop Loss"
              variant="standard"
            />
          </div>
          <div className="inputRow">
            <TextField
              id="target_1"
              onChange={handleChange}
              label="Take Profit 1"
              variant="standard"
            />
          </div>
          <div className="inputRow">
            <TextField
              id="target_2"
              onChange={handleChange}
              label="Take Profit 2"
              variant="standard"
            />
          </div>
          <div className="inputRow">
            <TextField
              id="target_3"
              onChange={handleChange}
              label="Take Profit 3"
              variant="standard"
            />
          </div>
          <div className="inputRow">
            <TextareaAutosize
              id="message"
              aria-label="minimum height"
              minRows={3}
              placeholder="Message"
              style={{ width: 200 }}
            />
          </div>
          <div className="inputRow Post">
            <Button variant="outlined" onClick={handlePost}>
              Post
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const currencies = [
  { label: 'EURUSD', value: 'eurusd' },
  { label: 'EURGBP', value: 'eurgbp' },
  { label: 'EURJPY', value: 'eurjpy' },
];

export default PostSignal;
