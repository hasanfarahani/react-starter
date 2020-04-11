import React, { useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Context from '@app-context';
const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    backgroundColor: palette.primary.light,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Home() {
  const { globalState, dispatch } = React.useContext(Context);
  console.log('Global State', globalState);

  // useEffect(() => {
  //   dispatch({ type: 'ADD_ITEM', payload: 'my new one' });
  // }, []);

  // This is a test dispatch
  // const incrementCounter = useCallback(
  //   () => dispatch(initializeApplication()),
  //   [dispatch]
  // );

  // useEffect(() => {
  //   incrementCounter();
  // }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button>Home It Is</Button>
    </div>
  );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
