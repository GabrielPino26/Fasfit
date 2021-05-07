import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Item, StyleProvider, Label, Text } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import { FlatGrid } from 'react-native-super-grid';

import { styles } from './MediaPostStyle';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CameraRoll from '@react-native-community/cameraroll'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { storage } from '../../../helper/storage';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
});

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const add_gallery_icon = require('../../../../assets/image/add_gallery_icon.png');
const camera_icon = require('../../../../assets/image/camera_icon.png');
class MediaPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      nav_title: 'Folder Post'
    }
  }

  async componentDidMount() {
    let postStyle = await storage.getPostStyle()
    if(postStyle === "folder") {
      this.setState({nav_title: 'Folder Post'})
    }else{
      this.setState({nav_title: 'Shoutout Post'})
    }
    CameraRoll.getPhotos({
      first: 100,
      assetType: 'Photos'
    }).then(r => {
      let photos = []
      if(r.edges.length > 0) {
        for(let i = 0; i < r.edges.length; i++) {
          let image = {image: r.edges[i].node.image.uri}
          photos.push(image)
        }
      }
      this.setState({photos})
    }).catch((err) => {

    })
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleMediaPost = () => {
  }

  handleTextPost = () => {
  }

  handleAddGallery = () => {
    this.props.navigation.navigate('WardrobePost', {itemImage: null});
  }

  handleCamera = () => {
    var options = {
      maxWidth: 200,
      maxHeight: 200,
      mediaType: 'photo',
      includeBase64: true,
    };
    launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
        } else {
          this.props.navigation.navigate('MediaItemPost', {itemImage: response.uri});
        }
    });
  }

  handleGalleryItem = (gridItem) => {
    this.props.navigation.navigate('MediaItemPost', {itemImage: gridItem.image});
  }
  _renderGalleryGridItem = (gridItem) => {
    console.log(gridItem)
    return (
      <View>
        <TouchableOpacity style={styles.gallery_grid_item_button} onPress={() => this.handleGalleryItem(gridItem)}>
            <Image style={styles.gallery_grid_item_image} source= {{uri: gridItem.image}}/>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <Label style={styles.navTitleLabel}>{this.state.nav_title}</Label>
              <TouchableOpacity style={styles.notificationBackButton} onPress={() => this.handleBack()}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView style={styles.keyboard_view}>
              <FlatGrid 
                itemDimension={100}
                data={this.state.photos}
                horizontal={false}
                renderItem={({item}) => this._renderGalleryGridItem(item)}
              />
            </KeyboardAwareScrollView>
            <View style={styles.bottom_view}>
              <TouchableOpacity style={styles.addGalleryButton} onPress={() => this.handleAddGallery()}>
                <Image style={styles.addGalleryButtonImage} source={add_gallery_icon}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cameraButton} onPress={() => this.handleCamera()}>
                <Image style={styles.cameraButtonImage} source={camera_icon}/>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaPost);