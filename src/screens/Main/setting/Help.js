import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './HelpStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const right_arrow_icon = require('../../../../assets/image/right_arrow_icon.png');

export default class Help extends Component {

  constructor(props) {
    super(props);
    this.state = {
      help_data: [
        {helpid:'001', helptitle:'Report Problem'},
        {helpid:'002', helptitle:'Report Abuse'},
        {helpid:'003', helptitle:'Help Center'},
        {helpid:'004', helptitle:'Contact Us'},
      ],
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleSelection = (item) => {
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={styles.setting_item_view} onPress={() => this.handleSelection(item)}>
        <Label style={styles.item_name_label}>{item.helptitle}</Label>
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
              <Label style={styles.navTitleLabel}>Help</Label>
              <View style={styles.rightNavView}></View>
            </View>
            <View style={styles.setting_content_view}>
              <FlatList
                data={this.state.help_data}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={item => item.helpid}
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