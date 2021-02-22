import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { Container, Text, StyleProvider, Label, Input } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import WorldInfo from '../world/WorldInfo';
import FaslanceInfo from '../faslance/FaslanceInfo';

import { styles } from './HomeStyle';

import { FlatGrid } from 'react-native-super-grid';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  getWardrobeUserList,
  getWardrobePostList,
  addWardrobePostItem,
  getUserProfile,
  sendLikeNotification,
  sendCommentNotification
} from '../../../actions/wardrobe'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  getWardrobePostList: params => dispatch(getWardrobePostList(params)),
  getWardrobeUserList: params => dispatch(getWardrobeUserList(params)),
  addWardrobePostItem: params => dispatch(addWardrobePostItem(params)),
  getUserProfile: params => dispatch(getUserProfile(params)),
  sendLikeNotification: params => dispatch(sendLikeNotification(params)),
  sendCommentNotification: params => dispatch(sendCommentNotification(params))
});

const profile_button = require('../../../../assets/image/profile_avatar.png');
const search_button = require('../../../../assets/image/search_icon.png');
const side_mail_icon = require('../../../../assets/image/mail_icon.png');
const side_notification_icon = require('../../../../assets/image/notification_icon.png');
const side_shopping_icon = require('../../../../assets/image/shopping_icon.png');
const side_like_icon = require('../../../../assets/image/like_icon.png');
const side_settings_icon = require('../../../../assets/image/settings_icon.png');
const side_plus_icon = require('../../../../assets/image/plus_icon.png');

const side_hanger_d_icon = require('../../../../assets/image/hanger_d_icon.png');
const side_hanger_o1_icon = require('../../../../assets/image/hanger_o1_icon.png');
const side_hanger_o2_icon = require('../../../../assets/image/hanger_o2_icon.png');
const side_hanger_t_icon = require('../../../../assets/image/hanger_t_icon.png');

const side_global_fire_icon = require('../../../../assets/image/global_fire_icon.png');

const side_path_tips_icon = require('../../../../assets/image/faslance_tips_icon.png');

const bottom_hanger_icon = require('../../../../assets/image/hanger_icon.png');
const bottom_global_icon = require('../../../../assets/image/global_icon.png');
const bottom_path_icon = require('../../../../assets/image/path_icon.png');
const bottom_compass_icon = require('../../../../assets/image/compass_icon.png');

const bottom_hanger_icon_selected = require('../../../../assets/image/hanger_icon_selected.png');
const bottom_global_icon_selected = require('../../../../assets/image/global_icon_selected.png');
const bottom_path_icon_selected = require('../../../../assets/image/path_icon_selected.png');
const bottom_compass_icon_selected = require('../../../../assets/image/compass_icon_selected.png');

const bottom_popup_buy_icon = require('../../../../assets/image/buy_icon.png');
const bottom_popup_sell_icon = require('../../../../assets/image/sell_icon.png');
const bottom_popup_post_icon = require('../../../../assets/image/post_icon.png');

const pushpin_icon = require('../../../../assets/image/pushpin_icon.png');

const content_image = require('../../../../assets/image/test1.png');
const share_image = require('../../../../assets/image/item_share_icon.png');
const heart_image = require('../../../../assets/image/item_heart_icon.png');
const comment_image = require('../../../../assets/image/item_heart_icon.png');

const hot_sport_string = "HOT SPOT"
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bottom_hanger_button_selected: true,
      bottom_global_button_selected: false,
      bottom_path_button_selected: false,
      bottom_compass_button_selected: false,
      user_data: [],
      selectedGridItem: null,
      post_data: [],
      nav_title: 'Wardrobe',
      post_user_data: [],
    }
  }

  async componentDidMount() {
    await this.getUserList()
    await this.getPostList()
  }

  async getUserList() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getWardrobeUserList } = this.props
    getWardrobeUserList(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        this.setState({user_data: JSON.parse(JSON.stringify(response['data']))})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  async getPostList() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getWardrobePostList } = this.props
    getWardrobePostList(params).then(async response => {
      if(response) {
        let postData = JSON.parse(JSON.stringify(response['data']))
        console.log("response_post: ", postData)
        this.setState({post_user_data: []})
        for (let postObject of postData) {
          let user_id = postObject['user_id']
          await this.getProfilePost(user_id)
        }
        this.setState({post_data: postData})
      }else{
        Alert.alert("Error", "Get Post is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  async getProfilePost(userID) {
    let params = {
      user_id: userID,
    }
    console.log("params: ", params);
    const { getUserProfile } = this.props
    getUserProfile(params).then(async response => {
      if(response) {
        console.log("response_post: ", response)
        let userData = JSON.parse(response['data'])
        let userPostData = this.state.post_user_data
        userPostData.push(userData)
        this.setState({post_user_data: userPostData})
      }else{
        Alert.alert("Error", "Get Post is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  handleProfile = (profileID) => {
    this.props.navigation.navigate('Profile', {profileID: profileID});
  }

  handleBack = () => {

  }

  handleLike = async (post_id) => {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']

    let params = {
      user_id: userId,
      post_id: post_id,
    }
    console.log("params: ", params);
    const { sendLikeNotification } = this.props
    sendLikeNotification(params).then(async response => {
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

  handleComment = async (post_id) => {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']

    let params = {
      user_id: userId,
      post_id: post_id,
      content: ''
    }
    console.log("params: ", params);
    const { sendCommentNotification } = this.props
    sendCommentNotification(params).then(async response => {
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

  handleNext = () => {
  }

  handleSideMail = () => {
    this.props.navigation.navigate('Message');
  }

  handleSideNotification = () => {
    this.props.navigation.navigate('Notification');
  }

  handleSideShopping = () => {

  }

  handleSideLike = () => {

  }

  handleSideSettings = () => {
    this.props.navigation.navigate('Setting');
  }

  handleSidePlus = () => {
    this.props.navigation.navigate('FaslanceCreate')
  }

  handleSideTips = () => {
    this.props.navigation.navigate('FaslanceTips')
  }

  handleBottomHanger = () => {
    this.BottomAllDisabled();
    this.setState({bottom_hanger_button_selected: true, nav_title: 'Wardrobe'});
  }

  handleBottomGlobal = () => {
    this.BottomAllDisabled();
    this.setState({bottom_global_button_selected: true, nav_title: 'World'});
  }

  handleBottomPath = () => {
    this.BottomAllDisabled();
    this.setState({bottom_path_button_selected: true, nav_title: 'Faslance'});
  }

  handleBottomCompass = () => {
    // this.BottomAllDisabled();
    if(this.state.bottom_path_button_selected){
      return
    }
    this.setState({bottom_compass_button_selected: !this.state.bottom_compass_button_selected});
  }

  BottomAllDisabled() {
    this.setState({
      bottom_hanger_button_selected: false,
      bottom_global_button_selected: false,
      bottom_path_button_selected: false,
      bottom_compass_button_selected: false
    });
  }

  handlePopupBuy = () => {
  }

  handlePopupSell = () => {
  }

  handlePopupPost = () => {
    if(this.state.bottom_hanger_button_selected) {
      this.props.navigation.navigate('WardrobePost');
    }else if(this.state.bottom_global_button_selected) {
      this.props.navigation.navigate('WorldPost');
    }else if(this.state.bottom_path_button_selected) {
      // this.props.navigation.navigate('Notification');
    }
  }

  handleGridItem = (gridItem) => {
    this.setState({selectedGridItem: gridItem});
  }

  changeSearchText = (value) => {    
  }

  _renderGridItem = (gridItem) => {
    let userItem = JSON.parse(gridItem)
    let userProfile = userItem['profile']
    return (
      <View>
      {this.state.selectedGridItem && this.state.selectedGridItem['name'] == userProfile['name'] ?
        <TouchableOpacity style={styles.selected_grid_item_button} onPress={() => this.handleGridItem(userProfile)}>
          <Image style={styles.grid_item_image} source={{uri: userProfile['picture']}}/>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.grid_item_button} onPress={() => this.handleGridItem(userProfile)}>
          <Image style={styles.grid_item_image} source={{uri: userProfile['picture']}}/>
        </TouchableOpacity>
      }
      </View>
    )
  }

  _renderItem = (item) => {
    if(this.state.post_user_data.length == 0) {
      return null;
    }
    let postItem = JSON.parse(item)
    let postUserItem = null;
    for (let post_user of this.state.post_user_data) {
      let user_id = post_user['_id']
      if(user_id == postItem['user_id']) {
        postUserItem = post_user;
        break
      }
    }
    if(postUserItem == null) {
      return null;
    }
    let postUserProfile = postUserItem['profile']

    return (
      <View style={styles.list_item_view}>
        <View style={styles.item_header_view}>
          <TouchableOpacity style={styles.item_header_profile_button} onPress={this.handleProfile(postUserItem['_id'])}>
            <Image style={styles.item_header_profile_button_image} source={{uri: postUserProfile['picture']}}/>
          </TouchableOpacity>
          <View style={styles.item_header_name_view}>
            <Label style={styles.item_header_title_label}>{postUserProfile['name']}</Label>
            <Label style={styles.item_header_time_label}>{postItem['createdAt']}</Label>
          </View>
          {/* <View style={styles.item_header_tail_view}>
            <TouchableOpacity style={styles.item_header_share_button} onPress={this.handleBack}>
              <Image style={styles.item_header_share_button_image} source={share_image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_header_heart_button} onPress={this.handleBack}>
              <Image style={styles.item_header_heart_button_image} source={heart_image}/>
              <Text style={styles.item_header_heart_button_label}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_header_comment_button} onPress={this.handleBack}>
              <Image style={styles.item_header_comment_button_image} source={comment_image}/>
              <Text style={styles.item_header_comment_button_label}></Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.item_content_view}>
          {/* <Label style={styles.item_cost_label}>$299</Label> */}
          <Image style={styles.item_content_image} source={{uri: postItem['image']}}/>
          <Text style={styles.item_content_comment}>{postItem['description']}</Text>
        </View>
        <View style={styles.item_bottom_view}>
          <Label style={styles.item_bottom_line} />
          <View style={styles.item_bottom_buttons_view}>
            <TouchableOpacity style={styles.item_bottom_like_button} onPress={async() => {await this.handleLike(postItem['_id'])}}>
              <Image style={styles.item_bottom_like_button_image} source={comment_image}/>
              <Text style={styles.item_bottom_like_button_label}>Like {postItem['total_likes']}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_bottom_comment_button} onPress={async() => {await this.handleComment(postItem['_id'])}}>
              <Image style={styles.item_bottom_comment_button_image} source={comment_image}/>
              <Text style={styles.item_bottom_comment_button_label}>Comment {postItem['total_comments']}</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.item_bottom_wishlist_button} onPress={this.handleBack}>
              <Image style={styles.item_bottom_wishlist_button_image} source={comment_image}/>
              <Text style={styles.item_bottom_wishlist_button_label}>Wishlist</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    )
  }
  _renderSideHangerView() {
    if(this.state.bottom_hanger_button_selected) {
      return (
        <View style={styles.side_menu_hanger_bg}>
          <View style={styles.side_menu_hanger_img_view}>
            <Image style={styles.side_hanger_o1_image} source={side_hanger_o1_icon}/>
            <Image style={styles.side_hanger_o2_image} source={side_hanger_o2_icon}/>
            <Image style={styles.side_hanger_t_image} source={side_hanger_t_icon}/>
            <Image style={styles.side_hanger_d_image} source={side_hanger_d_icon}/>
          </View>
        </View>
      )
    }
  }

  _renderSideGlobalView() {
    if(this.state.bottom_global_button_selected) {
      return (
        <View style={styles.side_menu_global_bg}>
          <View style={styles.side_menu_global_img_view}>
            <Image style={styles.side_global_fire_image} source={side_global_fire_icon}/>
            <Label style={styles.side_global_fire_divided}></Label>
            {hot_sport_string.split('').map((char, i) => <Text key={i} style={styles.side_global_fire_text}>{char}</Text>)}
          </View>
        </View>
      )
    }
  }

  _renderSidePathView() {
    if(this.state.bottom_path_button_selected) {
      return (
        <View style={styles.side_menu_path_bg}>
            <TouchableOpacity style={styles.side_menu_item} onPress={this.handleSidePlus}>
              <Image style={styles.side_menu_item_plus} source={side_plus_icon}/>
            </TouchableOpacity>
            <Label style={styles.side_menu_divided}></Label>
          <TouchableOpacity style={styles.side_menu_path_img_view} onPress={this.handleSideTips}>
            <Image style={styles.side_path_tips_image} source={side_path_tips_icon}/>
          </TouchableOpacity>
        </View>
      )
    }
  }

  _renderHangerView() {
    if(this.state.bottom_hanger_button_selected) {
      return (
        <View style={styles.body_data_content}>
          {/* <View style={styles.body_search_content}>
            <Input style={styles.body_search_text} onChangeText={this.changeSearchText} />
            <TouchableOpacity style={styles.pushpin_button} onPress={this.handleSideMail}>
              <Image style={styles.pushpin_image} source={pushpin_icon}/>
            </TouchableOpacity>
          </View> */}
          <View style={styles.body_grid_content}>
            <FlatGrid 
              itemDimension={100}
              data={this.state.user_data}
              spacing={5}
              horizontal={true}
              renderItem={({item}) => this._renderGridItem(item)}
            />
          </View>
          <Label style={styles.divided_line} />
          <View style={styles.body_list_content}>
            <FlatList
              data={this.state.post_data}
              renderItem={({item}) => this._renderItem(item)}
              keyExtractor={item => item.title}
              style={styles.home_list_view}
              extraData={this.state.refresh}
            />
          </View>
        </View>
      )
    }else{
      return null;
    }
  }

  _renderGlobalView() {
    if(this.state.bottom_global_button_selected) {
      return (
        <View style={styles.body_data_content}>
          <WorldInfo></WorldInfo>
        </View>
      )
    }else{
      return null;
    }
  }

  _renderPathView() {
    if(this.state.bottom_path_button_selected) {
      return (
        <View style={styles.body_data_content}>
          <FaslanceInfo {...this.props}></FaslanceInfo>
        </View>
      )
    }else{
      return null;
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.header_content}>
            <TouchableOpacity style={styles.profileButton} onPress={this.handleProfile}>
              <Image style={styles.profileButtonImage} source={profile_button}/>
            </TouchableOpacity>
            <Label style={styles.homeTitleLabel}>{this.state.nav_title}</Label>
            <TouchableOpacity style={styles.searchButton} onPress={this.handleNext}>
              <Image style={styles.searchButtonImage} source={search_button}/>
            </TouchableOpacity>
          </View>
          <View style={styles.body_content}>
            {this._renderHangerView()}
            {this._renderGlobalView()}
            {this._renderPathView()}
          </View>
          <View style={styles.side_menu}>
            <TouchableOpacity style={styles.side_menu_item} onPress={this.handleSideMail}>
              <Image style={styles.side_menu_item_mail} source={side_mail_icon}/>
            </TouchableOpacity>
            <Label style={styles.side_menu_divided}></Label>
            <TouchableOpacity style={styles.side_menu_item} onPress={this.handleSideNotification}>
              <Image style={styles.side_menu_item_notification} source={side_notification_icon}/>
            </TouchableOpacity>
            <Label style={styles.side_menu_divided}></Label>
            {/* <TouchableOpacity style={styles.side_menu_item} onPress={this.handleSideShopping}>
              <Image style={styles.side_menu_item_shopping} source={side_shopping_icon}/>
            </TouchableOpacity>
            <Label style={styles.side_menu_divided}></Label>
            <TouchableOpacity style={styles.side_menu_item} onPress={this.handleSideLike}>
              <Image style={styles.side_menu_item_like} source={side_like_icon}/>
            </TouchableOpacity>
            <Label style={styles.side_menu_divided}></Label> */}
            <TouchableOpacity style={styles.side_menu_item} onPress={this.handleSideSettings}>
              <Image style={styles.side_menu_item_settings} source={side_settings_icon}/>
            </TouchableOpacity>
            <Label style={styles.side_menu_divided}></Label>
            {this._renderSideHangerView()}
            {this._renderSideGlobalView()}
            {this._renderSidePathView()}
          </View>
          <View style={styles.bottom_menu}>
            <TouchableOpacity style={styles.bottom_menu_item} onPress={this.handleBottomHanger}>
              <Image style={styles.bottom_menu_item_hanger} source={this.state.bottom_hanger_button_selected ? bottom_hanger_icon_selected : bottom_hanger_icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottom_menu_item} onPress={this.handleBottomGlobal}>
              <Image style={styles.bottom_menu_item_global} source={this.state.bottom_global_button_selected ? bottom_global_icon_selected : bottom_global_icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottom_menu_item} onPress={this.handleBottomPath}>
              <Image style={styles.bottom_menu_item_path} source={this.state.bottom_path_button_selected ? bottom_path_icon_selected : bottom_path_icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottom_menu_item1} onPress={this.handleBottomCompass}>
              <Image style={styles.bottom_menu_item_compass} source={this.state.bottom_compass_button_selected ? bottom_compass_icon_selected : bottom_compass_icon}/>
            </TouchableOpacity>
          </View>
          {this.state.bottom_compass_button_selected ? 
            <View style={styles.compass_popup_view}>
              {/* <TouchableOpacity style={styles.compass_popup_button} onPress={this.handlePopupBuy}>
                <Image style={styles.compass_popup_buy_image} source={bottom_popup_buy_icon}/>
                <Text style={styles.compass_popup_button_text}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.compass_popup_button} onPress={this.handlePopupSell}>
                <Image style={styles.compass_popup_sell_image} source={bottom_popup_sell_icon}/>
                <Text style={styles.compass_popup_button_text}>Sell</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.compass_popup_button} onPress={this.handlePopupPost}>
                <Image style={styles.compass_popup_post_image} source={bottom_popup_post_icon}/>
                <Text style={styles.compass_popup_button_text}>Post</Text>
              </TouchableOpacity>
            </View>
            : null
          }
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);