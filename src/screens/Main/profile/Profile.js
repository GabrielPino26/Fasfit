import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground, ScrollView, LogBox, Alert } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './ProfileStyle';

import { FlatGrid } from 'react-native-super-grid';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  sendFollowInvitation
} from '../../../actions/wardrobe'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  sendFollowInvitation: params => dispatch(sendFollowInvitation(params))
});

const welcome_background  = require('../../../../assets/image/test2.png');
const back_button = require('../../../../assets/image/white_back_icon.png'); 
const profile_photo = require('../../../../assets/image/profile_avatar.png'); 
const dm_button = require('../../../../assets/image/dm_icon.png');
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid_data: [
      ],
      selectedGridItem: null,
      profileID: '',
      username: ''
    }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    let userInfo  = await storage.getUserInfo();
	
    const profileID = navigation.getParam('profileID', ''); 
    this.setState({profileID: profileID, username: userInfo['username']}); 
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleDM = () => {
  }

  handleFollow = async () => {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']

    let params = {
      user_id: userId,
      follower_id: this.state.profileID,
    }
    console.log("params: ", params);
    const { sendFollowInvitation } = this.props
    sendFollowInvitation(params).then(async response => {
      if(response) {
        console.log("response_post: ", response)
        this.props.navigation.goBack();
      }else{
        Alert.alert("Error", "Add Post is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  handleCollab = () => {
  }

  handleGridItem = (gridItem) => {
    this.setState({selectedGridItem: gridItem});
  }

  handleListItem = (listItem) => {

  }
  _renderGridItem = (gridItem) => {
    return (
      <View>
      {this.state.selectedGridItem && this.state.selectedGridItem.title == gridItem.title ?
        <TouchableOpacity style={styles.selected_grid_item_button} onPress={() => this.handleGridItem(gridItem)}>
          <Image style={styles.grid_item_image} source={gridItem.img}/>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.grid_item_button} onPress={() => this.handleGridItem(gridItem)}>
          <Image style={styles.grid_item_image} source={gridItem.img}/>
        </TouchableOpacity>
      }
      </View>
    )
  }

  _renderListItem = (gridItem) => {
    return (
      <View>
        <TouchableOpacity style={styles.list_item_button} onPress={() => this.handleListItem(gridItem)}>
          <Image style={styles.list_item_image} source={gridItem.img}/>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.up_content}>
            <Image style={styles.backgroundImage} source={welcome_background} />
            <TouchableOpacity style={styles.profileBackButton} onPress={this.handleBack}>
              <Image style={styles.profileBackButtonImage} source={back_button}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dmButton} onPress={this.handleDM}>
              {/* <Image style={styles.dmButtonImage} source={dm_button}/> */}
              <Label style={styles.dmButtonLabel}>Edit</Label>
            </TouchableOpacity>
            <View style={styles.profileContentView}>
              <Image style={styles.profilePhotoImage} />
              <Label style={styles.profileNameLabel}>{this.state.username}</Label>
              <Label style={styles.profileAddressLabel}></Label>
            </View>
            <View style={styles.profileFollowView}>
              <View style={styles.profileFollowerView}>
                <Label style={styles.profileFollowerLabel}>Followers</Label>
                <Label style={styles.profileFollowerNumLabel}>0</Label>
              </View>
              <View style={styles.profileFollowingView}>
                <Label style={styles.profileFollowingLabel}>Following</Label>
                <Label style={styles.profileFollowingNumLabel}>0</Label>
              </View>
            </View>
            <TouchableOpacity style={styles.profileFollowButton} onPress={this.handleFollow}>
              <Label style={styles.profileFollowButtonLabel}>Follow</Label>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileCollabButton} onPress={this.handleCollab}>
              <Label style={styles.profileCollabButtonLabel}>Collab</Label>
            </TouchableOpacity>
          </View>
          <ScrollView 
            style={styles.down_content}
            horizontal={false}
            showsVerticalScrollIndicator = {false}
            showsHorizontalScrollIndicator = {false}
          >
            <Label style={styles.profileCommentLabel}></Label>
            <Label style={styles.profileDividedLine}/>
            <View style={styles.body_grid_content}>
              <FlatGrid 
                itemDimension={100}
                data={this.state.grid_data}
                spacing={5}
                horizontal={true}
                renderItem={({item}) => this._renderGridItem(item)}
              />
            </View>
            <Label style={styles.profileDividedLine}/>
            <View style={styles.body_list_content}>
              <FlatGrid 
                itemDimension={100}
                data={this.state.grid_data}
                spacing={5}
                renderItem={({item}) => this._renderListItem(item)}
              />
            </View>
          </ScrollView>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);