import React from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import { InputAdornment } from '@material-ui/core';

export default function SearchBar(props) {
  // Style Hook
  const useStyles = makeStyles({
    textField: {
      width: '400px',
    },
    searchDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '15px',
    },
    btnDiv: {
      margin: '6px',
    },
  });
  const classes = useStyles();
  return (
    <div className='searchBar'>
      <form
        onSubmit={props.handleSubmit}
        action=''
        className={classes.searchDiv}
      >
        <TextField
          className={classes.textField}
          onChange={props.handleChange}
          type='text'
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <TwitterIcon style={{ color: '#247B7B' }} />{' '}
              </InputAdornment>
            ),
          }}
        />
        <div className={classes.btnDiv}>
          <Button className='searchBtn' type='submit'>
            <SearchOutlinedIcon fontSize='large' style={{ color: '#247B7B' }} />
          </Button>
        </div>
      </form>
    </div>
  );
}
