import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './NotificationStyle';

import NotificationLike from './NotificationLike';
import NotificationComments from './NotificationComments';
import NotificationSell from './NotificationSell';
import NotificationPurchase from './NotificationPurchase';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/search_icon.png');

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLikeTab: true,
      selectedCommentsTab: false,
      selectedMentionsTab: false,
      selectedFollowersTab: false,
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleTabLike = () => {
    if(!this.state.selectedLikeTab) {
      this.setState({selectedLikeTab: true, selectedCommentsTab: false, selectedMentionsTab: false, selectedFollowersTab: false, selectedScheduleTab: false});
    }
  }

  handleTabComments = () => {
    if(!this.state.selectedCommentsTab) {
      this.setState({selectedLikeTab: false, selectedCommentsTab: true, selectedMentionsTab: false, selectedFollowersTab: false, selectedScheduleTab: false});
    }
  }

  handleTabMentions = () => {
    if(!this.state.selectedMentionsTab) {
      this.setState({selectedLikeTab: false, selectedCommentsTab: false, selectedMentionsTab: true, selectedFollowersTab: false,selectedScheduleTab: false});
    }
  }

  handleTabFollowers = () => {
    if(!this.state.selectedMentionsTab) {
      this.setState({selectedLikeTab: false, selectedCommentsTab: false, selectedMentionsTab: false, selectedFollowersTab: true,selectedScheduleTab: false});
    }
  }

  handleTrackPurchase = (item) => {
    this.props.navigation.navigate('TrackPurchase', { item });
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.notificationBackButton} onPress={() => this.handleBack()}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>Notifications</Label>
              <TouchableOpacity style={styles.notificationSearchButton} onPress={() => this.handleBack()}>
                {/* <Image style={styles.notificationSearchButtonImage} source={search_button_icon}/> */}
              </TouchableOpacity>
            </View>
            <View style={styles.tabView}>
              {this.state.selectedLikeTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabLike()}>
                  <Label style={styles.selected_tab_label}>Like</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabLike()}>
                  <Label style={styles.normal_tab_label}>Like</Label>
                </TouchableOpacity>
              }
              {this.state.selectedCommentsTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabComments()}>
                  <Label style={styles.selected_tab_label}>Comments</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabComments()}>
                  <Label style={styles.normal_tab_label}>Comments</Label>
                </TouchableOpacity>
              }
              {this.state.selectedMentionsTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabMentions()}>
                  <Label style={styles.selected_tab_label}>Mentions</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabMentions()}>
                  <Label style={styles.normal_tab_label}>Mentions</Label>
                </TouchableOpacity>
              }
              {this.state.selectedFollowersTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={() => this.handleTabFollowers()}>
                  <Label style={styles.selected_tab_label}>Followers</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={() => this.handleTabFollowers()}>
                  <Label style={styles.normal_tab_label}>Followers</Label>
                </TouchableOpacity>
              }
            </View>
            <View style={styles.tab_content_view}>
              {this.state.selectedLikeTab ? 
                <NotificationLike />
                : null
              }
              {this.state.selectedCommentsTab ? 
                <NotificationComments />
                : null
              }
              {this.state.selectedMentionsTab ? 
                <NotificationSell />
                : null
              }
              {this.state.selectedFollowersTab ? 
                <NotificationPurchase
                  onClickTrackPurchase = {this.handleTrackPurchase.bind(this)}
                 />
                : null
              }

            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}