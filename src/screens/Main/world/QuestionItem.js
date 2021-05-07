import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './QuestionItemStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/search_icon.png');
const fas_star_empty = require('../../../../assets/image/fas_star_empty.png');
const fas_star_filled = require('../../../../assets/image/fas_star_filled.png');
const fas_warn = require('../../../../assets/image/fas_warn.png');
const fas_share = require('../../../../assets/image/fas_share.png');

export default class QuestionItem extends Component {

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
      selectedItem: null
    }
  }

  componentDidMount() {
    let selectedItem = this.props.navigation.state.params.item
    this.setState({selectedItem})
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
    // this.setState({selected_item_userid: item.userid});
    // this.props.navigation.navigate('MessageChat', { item });
  }

  handleStar = () => {
  }

  handleWarn = () => {
  }

  handleShare = () => {
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
              <Label style={styles.navTitleLabel}>Questionnaire</Label>
              <TouchableOpacity style={styles.messageSearchButton} onPress={() => this.handleSearch()}>
                {/* <Image style={styles.messageSearchButtonImage} source={search_button_icon}/> */}
              </TouchableOpacity>
            </View>
            {this.state.selectedItem ?
              <View style={styles.question_item_view}>
                <View style={styles.item_img_view}>
                  <Image style={styles.item_profile_image} source={this.state.selectedItem.profile_img}/>
                </View>
                <View style={styles.item_info_view}>
                  <Label style={styles.item_name_label}>{this.state.selectedItem.username}</Label>
                  <Label style={styles.item_name_label}>{this.state.selectedItem.last_message}</Label>
                </View>
                <View style={styles.like_info_view}>
                  <TouchableOpacity style={styles.starButton} onPress={() => this.handleStar()}>
                    <Image style={styles.starButtonImage} source={this.state.selectedItem.like_value === 0 ? fas_star_empty : fas_star_filled}/>
                  </TouchableOpacity>
                  <Label style={styles.like_number_label}>{this.state.selectedItem.like_number}</Label>
                  <TouchableOpacity style={styles.starButton} onPress={() => this.handleShare()}>
                    <Image style={styles.fasShareButtonImage} source={fas_share}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.starButton} onPress={() => this.handleWarn()}>
                    <Image style={styles.fasWarnButtonImage} source={fas_warn}/>
                  </TouchableOpacity>
                </View>
              </View>
              : null
            }
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