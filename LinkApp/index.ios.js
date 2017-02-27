/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LinkApp extends Component {
  constructor(props) {
    super(props);
    this.parsePictureForLinks = this.parsePictureForLinks.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          onZoomChanged={(e) => {
            console.log('zoomed!');
          }}


          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
         
        <Icon.Button color="#4b4b4b" name="camera-retro" onPress={this.takePicture.bind(this)} style={styles.capture}>
          <Text>Take Picture</Text>
        </Icon.Button>

        </Camera>
      </View>
    );
  }

  parsePictureForLinks(imgPath) {
    console.log(imgPath);
  }

  takePicture() {
    this.camera.capture()
      .then((data) => parsePictureForLinks(data.path))
      .catch(err => console.error("error: " + err));
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    backgroundColor: "white",
    flex: 0,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('LinkApp', () => LinkApp);
