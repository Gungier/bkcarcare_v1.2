import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


export const Button = () => {
    return (
      <Button
        onClick={() => {
          alert("clicked");
        }}></Button>
    );
}

