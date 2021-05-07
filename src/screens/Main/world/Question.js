import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import { TextInput } from 'react-native-gesture-handler';

import { styles } from './QuestionStyle';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  getLeastQuestion,
  addLeastQuestion,
  getRecentQuestion,
  addRecentQuestion,
  getRandomQuestion,
  addRandomQuestion
} from '../../../actions/question'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  getLeastQuestion: params => dispatch(getLeastQuestion(params)),
  addLeastQuestion: params => dispatch(addLeastQuestion(params)),
  getRecentQuestion: params => dispatch(getRecentQuestion(params)),
  addRecentQuestion: params => dispatch(addRecentQuestion(params)),
  getRandomQuestion: params => dispatch(getRandomQuestion(params)),
  addRandomQuestion: params => dispatch(addRandomQuestion(params)),
});

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/search_icon.png');
const chat_send_icon = require('../../../../assets/image/chat_send_icon.png');
const right_arrow_thread = require('../../../../assets/image/right_arrow_thread.png');
const fas_star_empty = require('../../../../assets/image/fas_star_empty.png');
const fas_star_filled = require('../../../../assets/image/fas_star_filled.png');
const fas_warn = require('../../../../assets/image/fas_warn.png');
const fas_share = require('../../../../assets/image/fas_share.png');

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message_data: [
        // {userid:'001', username: 'Borys Lim', time: '06:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Can you buy?', like_value: 0, like_number: '10K'},
        // {userid:'002', username: 'Lilly Josheh', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 1, like_number: '10K'},
        // {userid:'003', username: 'Tariq Ramos', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 0, like_number: '10K'},
        // {userid:'004', username: 'Elif Penn', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 0, like_number: '10K'},
        // {userid:'005', username: 'Lachlan Feeney', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 0, like_number: '10K'},
        // {userid:'006', username: 'Nikita Wemer', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 0, like_number: '10K'},
        // {userid:'007', username: 'Borys Lim', time: '06:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Can you buy?', like_value: 0, like_number: '10K'},
        // {userid:'008', username: 'Lilly Josheh', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 0, like_number: '10K'},
        // {userid:'009', username: 'Tariq Ramos', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 0, like_number: '10K'},
        // {userid:'010', username: 'Elif Penn', time: '04:30 PM', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'The unfortunate, yet truly exciting.', like_value: 0, like_number: '10K'},
      ],
      selected_item_userid: '',
      selectedLeastTab: true,
      selectedRecentTab: false,
      selectedRandomTab: false,
      last_message: ''
    }
  }

  async componentDidMount() {
    await this.getLeastQuestionList()
  }

  async getLeastQuestionList() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getLeastQuestion } = this.props
    getLeastQuestion(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        this.setState({message_data: JSON.parse(JSON.stringify(response['data']))})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }


  async getRecentQuestionList() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getRecentQuestion } = this.props
    getRecentQuestion(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        this.setState({message_data: JSON.parse(JSON.stringify(response['data']))})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  async getRandomQuestionList() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getRandomQuestion } = this.props
    getRandomQuestion(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        this.setState({message_data: JSON.parse(JSON.stringify(response['data']))})
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

  handleTabLeast = async () => {
    if(!this.state.selectedLeastTab) {
      this.setState({selectedLeastTab: true, selectedRecentTab: false, selectedRandomTab: false});
      await this.getLeastQuestionList()
    }
  }

  handleTabRecent = async() => {
    if(!this.state.selectedRecentTab) {
      this.setState({selectedLeastTab: false, selectedRecentTab: true, selectedRandomTab: false});
      await this.getRecentQuestionList()
    }
  }

  handleTabRandom = async() => {
    if(!this.state.selectedRandomTab) {
      this.setState({selectedLeastTab: false, selectedRecentTab: true, selectedRandomTab: false});
      await this.getRandomQuestionList()
    }
  }

  onChangeLastMessage = (value) => {
    this.setState({last_message: value})
  }
  handleSearch = () => {
  }

  handleSelection = (item) => {
    this.setState({selected_item_userid: item.userid});
    this.props.navigation.navigate('QuestionItem', { item });
  }

  handleQuestion = async () => {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let username = userInfo['username']
    let profile_image = userInfo['picture']
    let params = {
      user_id: userId,
      username: username,
      profile_img: profile_image,
      last_message: this.state.last_message,
      like_value: 0,
      like_number: 0
    }

    if(this.state.selectedLeastTab) {
      const { addLeastQuestion } = this.props
      addLeastQuestion(params).then(async response => {
        if(response) {
          console.log("response_post: ", response)
        }else{
          Alert.alert("Error", "Create Account is failed.")
        }
      }).catch(err => {
        Alert.alert("Error", err)
      })
    }else if(this.state.selectedRecentTab){
      const { addRecentQuestion } = this.props
      addRecentQuestion(params).then(async response => {
        if(response) {
          console.log("response_post: ", response)
        }else{
          Alert.alert("Error", "Create Account is failed.")
        }
      }).catch(err => {
        Alert.alert("Error", err)
      })
    }else{
      const { addRandomQuestion } = this.props
      addRandomQuestion(params).then(async response => {
        if(response) {
          console.log("response_post: ", response)
        }else{
          Alert.alert("Error", "Create Account is failed.")
        }
      }).catch(err => {
        Alert.alert("Error", err)
      })

    }
  }

  handleThread = () => {

  }

  handleStar = (item, index) => {
    let message_data = this.state.message_data
    item.like_value === 0 ? item.like_value = 1 : item.like_value = 0
    message_data[index] = item
    this.setState({message_data})
  }

  handleWarn = (item, index) => {
  }

  handleShare = (item, index) => {
  }

  _renderItem = (item, index) => {
    return (
      <TouchableOpacity  style={this.state.selected_item_userid == item.userid ? styles.selected_message_item_view : styles.message_item_view} onPress={() => this.handleSelection(item)}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={item.profile_img}/>
        </View>
        <View style={styles.item_info_view}>
          <Label style={styles.item_name_label}>{item.username}</Label>
          <Label style={styles.item_message_label}>{item.last_message}</Label>
          <TouchableOpacity style={styles.selected_thread_button} onPress={() => this.handleThread()}>
            <Label style={styles.selected_thread_label}>Thread</Label>
            <Image style={styles.right_arrow_image} source={right_arrow_thread}/>
          </TouchableOpacity>
        </View>
        <View style={styles.like_info_view}>
          <TouchableOpacity style={styles.starButton} onPress={() => this.handleStar(item, index)}>
            <Image style={styles.starButtonImage} source={item.like_value === 0 ? fas_star_empty : fas_star_filled}/>
          </TouchableOpacity>
          <Label style={styles.like_number_label}>{item.like_number}</Label>
          <TouchableOpacity style={styles.starButton} onPress={() => this.handleShare(item, index)}>
            <Image style={styles.fasShareButtonImage} source={fas_share}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.starButton} onPress={() => this.handleWarn(item, index)}>
            <Image style={styles.fasWarnButtonImage} source={fas_warn}/>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            {/* <View style={styles.headerView}>
              <TouchableOpacity style={styles.messageBackButton} onPress={() => this.handleBack()}>
                <Image style={styles.messageBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>Questionnaire</Label>
              <TouchableOpacity style={styles.messageSearchButton} onPress={() => this.handleSearch()}>
              </TouchableOpacity>
            </View> */}
            <View style={styles.tabView}>
              {this.state.selectedLeastTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabLeast()}>
                  <Label style={styles.selected_tab_label}>Least Starred</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabLeast()}>
                  <Label style={styles.normal_tab_label}>Least Starred</Label>
                </TouchableOpacity>
              }
              {this.state.selectedRecentTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabRecent()}>
                  <Label style={styles.selected_tab_label}>Recent</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabRecent()}>
                  <Label style={styles.normal_tab_label}>Recent</Label>
                </TouchableOpacity>
              }
              {this.state.selectedRandomTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabRandom()}>
                  <Label style={styles.selected_tab_label}>Random</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabRandom()}>
                  <Label style={styles.normal_tab_label}>Random</Label>
                </TouchableOpacity>
              }
            </View>
            <View style={styles.post_view}>
              <TextInput multiline={true} style={styles.post_text} placeholder='Ask your questions here' value={this.state.last_message} onChangeText={(value)=>this.onChangeLastMessage(value)}>
              </TextInput>
              <TouchableOpacity style={styles.messageButton} onPress={() => this.handleQuestion()}>
                <Image style={styles.messageButtonImage} source={chat_send_icon}/>
              </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Question);