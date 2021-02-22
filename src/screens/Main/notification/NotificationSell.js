import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './NotificationSellStyle';

export default class NotificationSell extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      sell_data: [
        {userid:'001', username: 'Lilly Josheh', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), sell_img: require('../../../../assets/image/test1.png')},
        {userid:'002', username: 'John Doe', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), sell_img: require('../../../../assets/image/test1.png')},
        {userid:'003', username: 'Phillips', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), sell_img: require('../../../../assets/image/test1.png')},
        {userid:'004', username: 'Ron Jackson', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), sell_img: require('../../../../assets/image/test1.png')},
        {userid:'005', username: 'Ron Jackson', date: '30/07/2020', time: '02:11 AM', profile_img: require('../../../../assets/image/profile_avatar.png'), sell_img: require('../../../../assets/image/test1.png')},
      ],
      selected_item_userid: '',
    }
  }

  componentDidMount() {
  }

  handleSelection = (userid) => {
    this.setState({selected_item_userid: userid});
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={this.state.selected_item_userid == item.userid ? styles.selected_sell_item_view : styles.sell_item_view} onPress={() => this.handleSelection(item.userid)}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={item.profile_img}/>
        </View>
        <View style={styles.item_info_view}>
          <Label style={styles.item_name_label}>{item.username}</Label>
          <Label style={styles.item_post_label}>buy product</Label>
          <Image style={styles.item_sell_image} source={item.sell_img}/>
          <Label style={styles.item_datetime_label}>{item.date} | {item.time}</Label>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.sell_data}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={item => item.userid}
          style={styles.sell_list_view}
          extraData={[]}
        />
      </View>
    );
  }
}