import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './MessageStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/search_icon.png');

export default class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message_data: [
        // {userid:'001', username: 'Borys Lim', time: '06:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Can you buy?'},
        // {userid:'002', username: 'Lilly Josheh', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
        // {userid:'003', username: 'Tariq Ramos', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
        // {userid:'004', username: 'Elif Penn', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
        // {userid:'005', username: 'Lachlan Feeney', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
        // {userid:'006', username: 'Nikita Wemer', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
        // {userid:'007', username: 'Borys Lim', time: '06:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Can you buy?'},
        // {userid:'008', username: 'Lilly Josheh', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
        // {userid:'009', username: 'Tariq Ramos', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
        // {userid:'010', username: 'Elif Penn', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.'},
      ],
      selected_item_userid: '',
      selectedDirectTab: true,
      selectedProjectTab: false,
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleTabDirect = () => {
    if(!this.state.selectedDirectTab) {
      this.setState({selectedDirectTab: true, selectedProjectTab: false});
    }
  }

  handleTabProject = () => {
    if(!this.state.selectedProjectTab) {
      this.setState({selectedDirectTab: false, selectedProjectTab: true});
    }
  }

  handleSearch = () => {
  }

  handleSelection = (item) => {
    this.setState({selected_item_userid: item.userid});
    this.props.navigation.navigate('MessageChat', { item });
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={this.state.selected_item_userid == item.userid ? styles.selected_message_item_view : styles.message_item_view} onPress={() => this.handleSelection(item)}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={item.profile_img}/>
        </View>
        <View style={styles.item_info_view}>
          <Label style={styles.item_name_label}>{item.username}</Label>
          <Label style={styles.item_message_label}>{item.last_message}</Label>
        </View>
        <Label style={styles.item_datetime_label}>{item.time}</Label>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.messageBackButton} onPress={() => this.handleBack()}>
                <Image style={styles.messageBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>Message</Label>
              <TouchableOpacity style={styles.messageSearchButton} onPress={() => this.handleSearch()}>
                {/* <Image style={styles.messageSearchButtonImage} source={search_button_icon}/> */}
              </TouchableOpacity>
            </View>
            <View style={styles.tabView}>
              {this.state.selectedDirectTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabDirect()}>
                  <Label style={styles.selected_tab_label}>Direct Messages</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabDirect()}>
                  <Label style={styles.normal_tab_label}>Direct Messages</Label>
                </TouchableOpacity>
              }
              {this.state.selectedProjectTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabProject()}>
                  <Label style={styles.selected_tab_label}>Project Messages</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabProject()}>
                  <Label style={styles.normal_tab_label}>Project Messages</Label>
                </TouchableOpacity>
              }
            </View>
            <View style={styles.message_content_view}>
              <FlatList
                data={this.state.message_data}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={item => item.userid}
                style={styles.message_list_view}
                extraData={[]}
              />
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}