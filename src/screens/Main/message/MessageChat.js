import React, { Component } from 'react';
import { View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import {GiftedChat, Send, Composer, Actions} from 'react-native-gifted-chat';

import { styles } from './MessageChatStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const right_menu_button_icon = require('../../../../assets/image/right_menu_icon.png');
const link_button_icon = require('../../../../assets/image/link_icon.png');
const picture_button_icon = require('../../../../assets/image/picture_icon.png');
const calendar_button_icon = require('../../../../assets/image/calendar_icon.png');
const clipboard_button_icon = require('../../../../assets/image/clipboard_icon.png');
const dollar_button_icon = require('../../../../assets/image/dollar_icon.png');
const chat_camera_button_icon = require('../../../../assets/image/chat_camera_icon.png');
const chat_clipboard_button_icon = require('../../../../assets/image/chat_clipboard_icon.png');
const chat_send_button_icon = require('../../../../assets/image/chat_send_icon.png');

export default class MessageChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          _id: 1,
          text: 'What you wear is how you present yourself to the?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'BL',
          },
        },
      ]
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleRightMenu = () => {
  }

  handleLink = () => {
  }

  handlePicture = () => {
  }

  handleCalendar = () => {
  }

  handleClipboard = () => {
  }

  handleDollar = () => {
  }

  handleSelection = (userid) => {
  }

  onSend = (messages = []) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    })
  }
  render() {
    let userItem = this.props.navigation.state.params.item
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.messageBackButton} onPress={this.handleBack}>
                <Image style={styles.messageBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <View style={styles.nameView}>
                <Label style={styles.navTitleLabel}>{userItem.username}</Label>
                <Label style={styles.navStateLabel}>Online</Label>
              </View>
              <TouchableOpacity style={styles.messageMenuButton} onPress={this.handleRightMenu}>
                <Image style={styles.messageMenuButtonImage} source={right_menu_button_icon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.preheaderView}>
              <TouchableOpacity style={styles.preheaderButton} onPress={this.handleLink}>
                  <Image style={styles.preheaderButtonImage} source={link_button_icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.preheaderButton} onPress={this.handlePicture}>
                  <Image style={styles.preheaderButtonImage} source={picture_button_icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.preheaderButton} onPress={this.handleCalendar}>
                  <Image style={styles.preheaderButtonImage} source={calendar_button_icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.preheaderButton} onPress={this.handleClipboard}>
                  <Image style={styles.preheaderButtonImage} source={clipboard_button_icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.preheaderButton} onPress={this.handleDollar}>
                  <Image style={styles.preheaderButtonImage} source={dollar_button_icon}/>
                </TouchableOpacity>
             </View>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{_id: 1}}
              renderSend={(props) => (
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 60 }}>
                  <Send {...props} containerStyle={{ borderWidth: 0}} alwaysShowSend={true}>
                    <View style={styles.chat_btnSend}>
                      <Image style={styles.preheaderButtonImage} source={chat_send_button_icon}/>
                    </View>
                  </Send>
                </View>
              )}
              renderComposer={(props) => (
                <Composer {...props} textInputStyle={styles.chat_inputToolbar}/>
              )}
              // renderActions={(props) => (
              //   <Actions {...props}>
              //     <View style={{ flexDirection: 'row', alignItems: 'center', height: 60 }}>
              //       <TouchableOpacity style={styles.preheaderButton} onPress={this.handleDollar}>
              //         <Image
              //           source={chat_camera_button_icon}
              //           style={styles.cameraButtonImage}
              //         />
              //       </TouchableOpacity>
              //     </View>
              //   </Actions>
              // )}
            />
          </View>
        </Container>
      </StyleProvider>
    );
  }
}