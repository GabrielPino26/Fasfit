import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './NotificationLikeStyle';
import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  getNotificationLikeList
} from '../../../actions/notification'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  getNotificationLikeList: params => dispatch(getNotificationLikeList(params)),
});

class NotificationLike extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      likes_data: [],
      // likes_data: [
      //   {userid:'001', username: 'Lilly Josheh', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), like_img: require('../../../../assets/image/test.png')},
      //   {userid:'002', username: 'John Doe', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), like_img: require('../../../../assets/image/test.png')},
      //   {userid:'003', username: 'Phillips', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), like_img: require('../../../../assets/image/test.png')},
      //   {userid:'004', username: 'Ron Jackson', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), like_img: require('../../../../assets/image/test.png')},
      //   {userid:'005', username: 'Ron Jackson', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), like_img: require('../../../../assets/image/test.png')},
      // ],
      selected_item_userid: '',
    }
  }

  async componentDidMount() {
    await this.getNotifications()
  }

  async getNotifications() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getNotificationLikeList } = this.props
    getNotificationLikeList(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        this.setState({likes_data: JSON.parse(JSON.stringify(response['data']))})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }
  handleSelection = (userid) => {
    this.setState({selected_item_userid: userid});
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={this.state.selected_item_userid == item['sender_id'] ? styles.selected_like_item_view : styles.like_item_view} onPress={() => this.handleSelection(item['sender_id'])}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={{uri: item['user_image']}}/>
        </View>
        <View style={styles.item_info_view}>
          <Label style={styles.item_name_label}>{item['sender_name']}</Label>
          <Label style={styles.item_post_label}>likes your post</Label>
          <Image style={styles.item_like_image} source={{uri: item['post_image']}}/>
          <Label style={styles.item_datetime_label}>{item['createdAt']}</Label>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.likes_data}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={item => item['sender_id']}
          style={styles.like_list_view}
          extraData={[]}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationLike);