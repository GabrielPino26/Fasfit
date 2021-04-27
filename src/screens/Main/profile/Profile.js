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
  sendFollowInvitation,
  getWardrobeUserList
} from '../../../actions/wardrobe'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  sendFollowInvitation: params => dispatch(sendFollowInvitation(params)),
  getWardrobeUserList: params => dispatch(getWardrobeUserList(params)),
});

const welcome_background  = require('../../../../assets/image/test2.png');
const back_button = require('../../../../assets/image/white_back_icon.png'); 
const profile_photo = require('../../../../assets/image/profile_avatar.png'); 
const profile_edit_button = require('../../../../assets/image/profile_edit_icon.png');
const profile_pin_button = require('../../../../assets/image/profile_pin_icon.png');
const profile_checkmark_button = require('../../../../assets/image/profile_checkmark_icon.png');

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

    await this.getUserList()

  }

  async getUserList() {
    let userInfo  = await storage.getUserInfo();
    console.log("user_info : ", userInfo)
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getWardrobeUserList } = this.props
    getWardrobeUserList(params).then(async response => {
      if(response) {
        let grid_data = JSON.parse(JSON.stringify(response['data']))
        this.setState({grid_data})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleEdit = () => {
  }

  handlePin = () => {
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

  handleGridItem = (gridItem) => {
    this.setState({selectedGridItem: gridItem});
  }

  handleListItem = (listItem) => {

  }
  _renderGridItem = (gridItem) => {
    return (
      <View>
      {this.state.selectedGridItem && this.state.selectedGridItem['username'] == gridItem['username'] ?
        <TouchableOpacity style={styles.selected_grid_item_button} onPress={() => this.handleGridItem(gridItem)}>
          <Image style={styles.grid_item_image} source={gridItem['picture'] == null ? profile_photo : {uri: gridItem['picture']}}/>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.grid_item_button} onPress={() => this.handleGridItem(gridItem)}>
          <Image style={styles.grid_item_image} source={gridItem['picture'] == null ? profile_photo : {uri: gridItem['picture']}}/>
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
            <TouchableOpacity style={styles.profileBackButton} onPress={() => this.handleBack()}>
              <Image style={styles.profileBackButtonImage} source={back_button}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton} onPress={() => this.handleEdit()}>
              <Image style={styles.editButtonImage} source={profile_edit_button}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pinButton} onPress={() => this.handlePin()}>
              <Image style={styles.editButtonImage} source={profile_pin_button}/>
            </TouchableOpacity>
            <View style={styles.profileContentView}>
              <Image style={styles.profilePhotoImage} source={profile_photo} />
              <TouchableOpacity style={styles.profileNameView} onPress={() => {}}>
                <Label style={styles.profileNameLabel}>{this.state.username}</Label>
                <Image style={styles.checkmarkButtonImage} source={profile_checkmark_button}/>
              </TouchableOpacity>
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
            <TouchableOpacity style={styles.profileFollowButton} onPress={() => this.handleFollow()}>
              <Label style={styles.profileFollowButtonLabel}>Follow</Label>
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