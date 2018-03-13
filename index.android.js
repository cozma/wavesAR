import { AppRegistry } from 'react-native';
import App from './App.js';

AppRegistry.registerComponent('wavesAR', () => App);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => App);

// For the recorder
const Rec = async (data) => {
    console.log('It works!')
  }
AppRegistry.registerHeadlessTask('Rec', () => Rec)