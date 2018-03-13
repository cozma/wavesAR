'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
} from 'react-viro';

var microm = new Microm();
var mp3 = null;


export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Starting Visualizations..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);

    this.state = {
      record: false
    }
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />

      </ViroARScene>
      
    );
  }

}

module.exports = HelloWorldSceneAR;
