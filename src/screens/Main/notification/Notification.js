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
      selectedSellTab: false,
      selectedPurchaseTab: false,
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleTabLike = () => {
    if(!this.state.selectedLikeTab) {
      this.setState({selectedLikeTab: true, selectedCommentsTab: false, selectedSellTab: false, selectedPurchaseTab: false});
    }
  }

  handleTabComments = () => {
    if(!this.state.selectedCommentsTab) {
      this.setState({selectedLikeTab: false, selectedCommentsTab: true, selectedSellTab: false, selectedPurchaseTab: false});
    }
  }

  handleTabSell = () => {
    if(!this.state.selectedSellTab) {
      this.setState({selectedLikeTab: false, selectedCommentsTab: false, selectedSellTab: true, selectedPurchaseTab: false});
    }
  }

  handleTabPurchase = () => {
    if(!this.state.selectedPurchaseTab) {
      this.setState({selectedLikeTab: false, selectedCommentsTab: false, selectedSellTab: false, selectedPurchaseTab: true});
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
              <TouchableOpacity style={styles.notificationBackButton} onPress={this.handleBack}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>Notifications</Label>
              <TouchableOpacity style={styles.notificationSearchButton} onPress={this.handleBack}>
                <Image style={styles.notificationSearchButtonImage} source={search_button_icon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.tabView}>
              {this.state.selectedLikeTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabLike}>
                  <Label style={styles.selected_tab_label}>Like</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabLike}>
                  <Label style={styles.normal_tab_label}>Like</Label>
                </TouchableOpacity>
              }
              {this.state.selectedCommentsTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabComments}>
                  <Label style={styles.selected_tab_label}>Comments</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabComments}>
                  <Label style={styles.normal_tab_label}>Comments</Label>
                </TouchableOpacity>
              }
              {/* {this.state.selectedSellTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabSell}>
                  <Label style={styles.selected_tab_label}>Sell</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabSell}>
                  <Label style={styles.normal_tab_label}>Sell</Label>
                </TouchableOpacity>
              }
              {this.state.selectedPurchaseTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabPurchase}>
                  <Label style={styles.selected_tab_label}>Purchase</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabPurchase}>
                  <Label style={styles.normal_tab_label}>Purchase</Label>
                </TouchableOpacity>
              } */}
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
              {this.state.selectedSellTab ? 
                <NotificationSell />
                : null
              }
              {this.state.selectedPurchaseTab ? 
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