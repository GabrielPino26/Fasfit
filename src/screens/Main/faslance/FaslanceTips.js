import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './FaslanceTipsStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/plus_icon.png');

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  getUserProfile
} from '../../../actions/wardrobe'

import {
  getFaslanceTipsList,
} from '../../../actions/faslance'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  getFaslanceTipsList: params => dispatch(getFaslanceTipsList(params)),
  getUserProfile: params => dispatch(getUserProfile(params))
});

class FaslanceTips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments_data: [],
      tips_data: []
    }
  }

  async componentDidMount() {
    await this.getTipsList()
  }

  async getTipsList() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getFaslanceTipsList } = this.props
    getFaslanceTipsList(params).then(async response => {
      if(response) {
        let faslanceTipsData = JSON.parse(JSON.stringify(response['data']))
        for (let faslanceTipObject of faslanceTipsData) {
          let user_id = faslanceTipObject['user_id']
          await this.getProfilePost(user_id)
        }
        this.setState({tips_data: faslanceTipsData})
      }else{
        //Alert.alert("Error", "Get Tips is failed.")
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
        let userPostData = this.state.comments_data
        userPostData.push(userData)
        this.setState({comments_data: userPostData})
      }else{
        Alert.alert("Error", "Get Profile is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleSelection = (userid) => {
  }

  handleAddTip = () => {
    this.props.navigation.navigate('FaslanceTipPost')
  }

  _renderItem = (item, index) => {
    let userProfile = item['profile']
    let tipData = this.state.tips_data[index]
    return (
      <TouchableOpacity  style={styles.comment_item_view} onPress={() => this.handleSelection(item['user_id'])}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={{uri: userProfile['image']}}/>
        </View>
        <View style={styles.item_info_view}>
          <Label style={styles.item_name_label}>{userProfile['name']}</Label>
          <Label style={styles.item_content_label}>{tipData['content']}</Label>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.notificationBackButton} onPress={this.handleBack}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>FasTips</Label>
              <TouchableOpacity style={styles.notificationSearchButton} onPress={this.handleAddTip}>
                <Image style={styles.notificationSearchButtonImage} source={search_button_icon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.tab_content_view}>
            <FlatList
              data={this.state.comments_data}
              renderItem={({item}) => this._renderItem(item, index)}
              keyExtractor={item => item.userid}
              style={styles.comment_list_view}
              extraData={[]}
            />
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FaslanceTips);