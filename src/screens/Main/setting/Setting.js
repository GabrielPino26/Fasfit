import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './SettingStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const right_arrow_icon = require('../../../../assets/image/right_arrow_icon.png');

export default class Setting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      setting_data: [
        {settingid:'001', settingtitle:'Account'},
        {settingid:'002', settingtitle:'Privacy & Safety'},
        {settingid:'003', settingtitle:'Notifications'},
        {settingid:'004', settingtitle:'Help'},
        {settingid:'005', settingtitle:'Add Account'},
      ],
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleSelection = (item) => {
    var navigation_page = ''
    switch (item.settingtitle) {
      case 'Account':
        navigation_page = 'Profile'
        break
      case 'Privacy & Safety':
        navigation_page = 'Privacy'
        break
      case 'Notifications':
        navigation_page = 'Notifications'
        break
      case 'Help':
        navigation_page = 'Help'
        break
      case 'Add Account':
        navigation_page = 'AddAccount'
        break
      default:
        break
    }
    this.props.navigation.navigate(navigation_page);
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={styles.setting_item_view} onPress={() => this.handleSelection(item)}>
        <Label style={styles.item_name_label}>{item.settingtitle}</Label>
        <View style={styles.item_img_view}>
          <Image style={styles.item_right_image} source={right_arrow_icon}/>
        </View>
        <Label style={styles.setting_divided}></Label>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.settingBackButton} onPress={this.handleBack}>
                <Image style={styles.settingBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>Settings</Label>
              <View style={styles.rightNavView}></View>
            </View>
            <View style={styles.setting_content_view}>
              <FlatList
                data={this.state.setting_data}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={item => item.settingid}
                style={styles.setting_list_view}
                extraData={[]}
              />
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}