import logo from './logo.svg';
import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Paper from '@material-ui/core/Paper';
import { Spring } from "react-spring/renderprops-universal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    textAlign: 'center',
    fontFamily: 'Nunito',
    fontSize: 70,
  },
  control: {
    padding: theme.spacing(0),
  },
}));

const paperColor = ['#cc4125ff', '#f6b26bff', '#ffd966ff', '#93c47dff', '#3c78d8ff', '#9900ffff', ]

export default function App() {
  const [currentPaper, setPaper] = React.useState(1);
  const [spacing, setSpacing] = React.useState(0);
  const [spin, setSpin] = React.useState(3);
  const [turn, setTurn] = React.useState(false);
  const [deg, setDeg] = React.useState(0);
  const [spinCount, setSpinCount] = React.useState(0);
  const classes = useStyles();

  const spinValue = [5, 4, 2, 1, 0, 5, 3, 1, 4, 2, 1, 5, 4, 3, 0, 4, 1, 5, 2, 1, 5, 3, 1, 4, 3, 1, 4, 2, 0];

  const handleChange = (event) => {
    // setSpacing(Number(event.target.value));
    // selectPaper(Number(event.target.value));
    // alert(event);
  };

  const findSpinValue = () => {
    if(spin != 0)
      return setSpin(spin);
    return(spinValue[spinCount]);
  }
  const toggle = () => {
    // setTurn(!turn); 
    setSpinCount(spinCount + 1);
    setDeg(75 + 720 + deg); 
    console.log(deg); 
    setSpin(findSpinValue)
  };

  return (
    <div><br/><br/>
      <IconButton aria-label="delete">
              <SettingsOutlinedIcon style={{marginLeft: 210}}/>
      </IconButton>
      <br/><br/>
      {spin == 0 && currentPaper < 10 && <div style={{marginLeft: 210,
        fontFamily: 'Nunito',
        fontSize: 70,}}>spin the wheel to play...</div>}
      {spin != 0 && currentPaper < 10 && <div style={{marginLeft: 210,
        fontFamily: 'Nunito',
        fontSize: 70,}}>move {spin} spaces</div>}
      {currentPaper >= 10 && <div style={{marginLeft: 210,
        fontFamily: 'Nunito',
        fontSize: 70,}}>You won!</div>}
    <br/><br/><br/><br/>
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Grid key={value} item>
              {currentPaper == value && <Paper style={{
                background: paperColor[value % paperColor.length],
                border: '5px solid yellow',
                color: 'white'}} className={classes.paper}
                                               onClick={() => {
                                                 if(spin > 0 && value > currentPaper && value - (spin + currentPaper) <= 0) {
                                                   setSpin(spin - (value - currentPaper));
                                                   setPaper(value);
                                                 }
                                               }}>{value}
              </Paper> }
              {currentPaper != value && <Paper style={{
                background: paperColor[value % paperColor.length],
                color: 'white'}} className={classes.paper}
                                               onClick={() => {
                                                 if(spin > 0 && value > currentPaper && value - (spin + currentPaper) <= 0) {
                                                   setSpin(spin - (value - currentPaper));
                                                   setPaper(value);
                                                 }
                                                   }}>{value}
              </Paper> }
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
      <div style={{marginLeft: 210, marginTop: 10,}}>
      <Grid
          container
          className={classes.root}
          direction="row"
          alignItems="center"
          spacing={100}
      >
        <Grid item xs={1}>
        <img src={'arrow.png'} alt='arrow' />
        </Grid>
        <Grid item xs={2} style={{marginLeft: 200}}>
      <Spring
        from={{ rotation: "0deg" }}
        to={{ rotation: turn ? "0" : deg + "%" }}
        style={{marginLeft: 210}}
    >

        {({ rotation }) => (
            <img src={'wheel.png'} alt='wheel' style={{ transform: `rotate(${rotation})` }} onClick={toggle}/>
        )}
      </Spring>
        </Grid>
        </Grid>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> asdfand save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
