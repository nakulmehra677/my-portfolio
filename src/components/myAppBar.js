import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function MyAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>

        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography variant="h6" color="primary" className={classes.title}>
              <b>Nakul's Portfolio</b>
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Qualifications</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Contributions</Button>
            <Button color="inherit">Work</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}
