import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './NotificationCommentsStyle';
import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  getNotificationCommentList
} from '../../../actions/notification'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  getNotificationCommentList: params => dispatch(getNotificationCommentList(params)),
});

class NotificationComments extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      comments_data: [],
      // comments_data: [
      //   {userid:'001', username: 'Lilly Josheh', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), comment_content: 'The unfortunate, yet truly exciting.'},
      //   {userid:'002', username: 'John Doe', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), comment_content: 'The unfortunate, yet truly exciting.'},
      //   {userid:'003', username: 'Phillips', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), comment_content: 'The unfortunate, yet truly exciting.'},
      //   {userid:'004', username: 'Ron Jackson', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), comment_content: 'The unfortunate, yet truly exciting.'},
      //   {userid:'005', username: 'Ron Jackson', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), comment_content: 'The unfortunate, yet truly exciting.'},
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
    const { getNotificationCommentList } = this.props
    getNotificationCommentList(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        this.setState({comments_data: JSON.parse(JSON.stringify(response['data']))})
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
      <TouchableOpacity  style={this.state.selected_item_userid == item['sender_id'] ? styles.selected_comment_item_view : styles.comment_item_view} onPress={() => this.handleSelection(item['sender_id'])}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={{uri: item['user_image']}}/>
        </View>
        <View style={styles.item_info_view}>
          <Label style={styles.item_name_label}>{item['sender_name']}</Label>
          <Label style={styles.item_post_label}>Comment on you post</Label>
          <Label style={styles.item_content_label}>{item['content']}</Label>
          <Label style={styles.item_datetime_label}>{item['createdAt']}</Label>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.comments_data}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={item => item['sender_id']}
          style={styles.comment_list_view}
          extraData={[]}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComments);