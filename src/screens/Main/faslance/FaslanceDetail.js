import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label, CheckBox } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import Stars from 'react-native-stars';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from './FaslanceDetailStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/search_icon.png');

const work_title_text = 'Work Bio'
const work_deital_text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.\n\n\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.`
export default class FaslanceDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userItem: null,
      hire_data: [
        {userid:'001', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Anyone can get dressed up and glamorous, but it is how people dress in their days off that are the most intriguing.', item_time: '5 days ago'},
        {userid:'002', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Anyone can get dressed up and glamorous, but it is how people dress in their days off that are the most intriguing.', item_time: '5 days ago'},
        {userid:'003', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Anyone can get dressed up and glamorous, but it is how people dress in their days off that are the most intriguing.', item_time: '5 days ago'},
        {userid:'004', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Anyone can get dressed up and glamorous, but it is how people dress in their days off that are the most intriguing.', item_time: '5 days ago'},
      ],
      pov_data: [
        {userid:'001', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_time: '5 days ago'},
        {userid:'002', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_time: '5 days ago'},
        {userid:'003', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_time: '5 days ago'},
        {userid:'004', username: 'Christy Daniel', user_img: require('../../../../assets/image/profile_avatar.png'), item_time: '5 days ago'},
      ]
    }
  }

  componentDidMount() {
    let userItem = this.props.navigation.state.params.item
    this.setState({userItem})
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleCheckedItem = (value) => {
    // item.user_checked = value
  }

  handleHireSelection = (item) => {
  }

  handlePovSelection = (item) => {

  }

  handlePlus = () => {}

  handleMinus = () => {}

  handleHire = () => {
  }

  _renderHireItem = (item) => {
    return (
      <TouchableOpacity  style={styles.detail_item_view} onPress={() => this.handleHireSelection(item)}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={item.user_img}/>
        </View>
        <View style={styles.item_hire_info_view}>
          <View style={styles.add_remove_view}>
            <Label style={styles.item_name_label}>{item.username}</Label>
              <TouchableOpacity style={styles.item_plus_button} onPress={this.handlePlus}>
                <Text style={styles.item_plus_button_label}>+</Text>
              </TouchableOpacity>
              <Text style={styles.item_divide_label}>/</Text>
              <TouchableOpacity style={styles.item_plus_button} onPress={this.handleMinus}>
                <Text style={styles.item_plus_button_label}>-</Text>
              </TouchableOpacity>
            </View>
          <Label style={styles.item_detail_label}>{item.item_detail}</Label>
        </View>
        <Label style={styles.item_datetime_label}>{item.item_time}</Label>
        <View style={styles.item_divided_line}></View>
      </TouchableOpacity>
    )
  }

  _renderPovItem = (item) => {
    return (
      <TouchableOpacity  style={styles.detail_item_view} onPress={() => this.handlePovSelection(item)}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={item.user_img}/>
        </View>
        <View style={styles.item_pov_info_view}>
          <View style={styles.add_remove_view}>
            <Label style={styles.item_name_label}>{item.username}</Label>
            <TouchableOpacity style={styles.item_plus_button} onPress={this.handlePlus}>
              <Text style={styles.item_plus_button_label}>+</Text>
            </TouchableOpacity>
            <Text style={styles.item_divide_label}>/</Text>
            <TouchableOpacity style={styles.item_plus_button} onPress={this.handleMinus}>
              <Text style={styles.item_plus_button_label}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Label style={styles.item_datetime_label}>{item.item_time}</Label>
        <View style={styles.item_divided_line}></View>
      </TouchableOpacity>
    )
  }


  render() {
    if(this.state.userItem == null){
      return null;
    }
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.detailBackButton} onPress={this.handleBack}>
                <Image style={styles.detailBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>{this.state.userItem.username}</Label>
              <View style={styles.nave_right_view}></View>
            </View>
            <KeyboardAwareScrollView style={styles.detail_content_view}>
              <View style={styles.detail_title_view}>
                <Image style={styles.profile_image} source={this.state.userItem.user_img}/>
                <View style={styles.name_view}>
                  <Label style={styles.nameLabel}>{this.state.userItem.username}</Label>
                  <Label style={styles.addressLabel}>{this.state.userItem.user_address}</Label>
                </View>
                <CheckBox style={styles.checkbox}  value={this.state.userItem.user_checked} onValueChange={(value) => this.handleCheckedItem(value)}></CheckBox>
              </View>
              <View style={styles.divided_line}></View>
              <View style={styles.work_view}>
                <Label style={styles.workTitleLabel}>{work_title_text}</Label>
                <Label style={styles.workDetailLabel}>{work_deital_text}</Label>
              </View>
              <View style={styles.divided_line}></View>
              <View style={styles.work_view}>
                <Label style={styles.workTitleLabel}>Prices</Label>
                <Label style={styles.workHourLabel}>${this.state.userItem.user_hourly}/hour</Label>
              </View>
              <View style={styles.divided_line}></View>
              <View style={styles.work_view}>
                <Label style={styles.workTitleLabel}>{this.state.userItem.user_type == 'hire' ? 'Rating/Reviews' : 'Freelancer POV'}</Label>
                {this.state.userItem.user_type == 'hire' ?
                  <View style={styles.feedback_view}>
                    <Label style={styles.item_feedback_label}>{this.state.userItem.user_feedback}</Label>
                    <View style={styles.stars_view}> 
                      <Stars
                        display={parseFloat(this.state.userItem.user_feedback)}
                        spacing={8}
                        count={5}
                        starSize={14}
                        fullStar= {require('../../../../assets/image/star_filled.png')}
                        emptyStar= {require('../../../../assets/image/star_empty.png')}/>
                    </View>
                    <Label style={styles.item_follow_label}>{this.state.userItem.user_follow}%</Label>
                  </View>
                  : null
                }
              </View>
              <View style={styles.detail_content_view}>
                {this.state.userItem.user_type == 'hire' ?
                  <FlatList
                    data={this.state.hire_data}
                    renderItem={({item}) => this._renderHireItem(item)}
                    keyExtractor={item => item.userid}
                    style={styles.message_list_view}
                    extraData={[]}
                  />
                  :
                  <FlatList
                    data={this.state.pov_data}
                    renderItem={({item}) => this._renderPovItem(item)}
                    keyExtractor={item => item.userid}
                    style={styles.message_list_view}
                    extraData={[]}
                  />
                }
              </View>
            </KeyboardAwareScrollView>
            <TouchableOpacity style={styles.hire_button} onPress={this.handleHire}>
              <Text style={styles.hire_button_label}>Hire</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}