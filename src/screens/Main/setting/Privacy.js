import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList, LogBox } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import { Switch } from 'react-native-switch';
import DropDownPicker from 'react-native-dropdown-picker';

import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './PrivacyStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const right_arrow_icon = require('../../../../assets/image/right_arrow_icon.png');
const downArrowImage = require('../../../../assets/image/down_arrow_blue_icon.png')

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`']);

export default class Privacy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      option_data: [{
        label: 'people you follow', value: 'you'
      }, {
        label: 'no one', value: 'one'
      }],

      privacyselected: true,
      comments_value: 'you',
      mentions_value: 'one',
      direct_value: 'you',
      comments_open: false,
      mentions_open: false,
      direct_open: false
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleSelection = (item) => {
  }
  
  handleToggleSwitch = (value) => {
    this.setState({privacyselected: value})
  }

  handleEveryone = () => {
    
  }

  handleBlockedAccount = () => {

  }

  handleMutedAccount = () => {

  }
  handleCommentsOpen = (value) => {
    this.setState({comments_open: value})
  }
  handleCommentsValue = (callback) => {
    this.setState(state => ({
      comments_value: callback(state.value)
    }));
  }
  handleMentionsOpen = (value) => {
    this.setState({mentions_open: value})
  }
  handleMentionsValue = (callback) => {
    this.setState(state => ({
      mentions_value: callback(state.value)
    }));
  }
  handleDirectOpen = (value) => {
    this.setState({direct_open: value})
  }
  handleDirectValue = (callback) => {
    this.setState(state => ({
      direct_value: callback(state.value)
    }));
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
              <Label style={styles.navTitleLabel}>{'Privacy & Safety'}</Label>
              <View style={styles.rightNavView}></View>
            </View>
            <View style={styles.setting_content_view}>
            <TouchableOpacity  style={styles.setting_item_view} onPress={() => this.handleBlockedAccount()}>
              <Label style={styles.item_name_label}>Blocked Accounts</Label>
              <View style={styles.item_img_view}>
                <Image style={styles.item_right_image} source={right_arrow_icon}/>
              </View>
              <Label style={styles.setting_divided}></Label>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.setting_item_view} onPress={() => this.handleMutedAccount()}>
              <Label style={styles.item_name_label}>Muted Accounts</Label>
              <View style={styles.item_img_view}>
                <Image style={styles.item_right_image} source={right_arrow_icon}/>
              </View>
              <Label style={styles.setting_divided}></Label>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.setting_item_view} onPress={() => this.handleMutedAccount()}>
              <Label style={styles.item_name_label}>Photo Taging</Label>
              <View style={styles.item_img_view}>
                <Switch
                  value={this.state.privacyselected}
                  onValueChange={(val) => this.handleToggleSwitch(val)}
                  disabled={false}
                  circleSize={18}
                  barHeight={20}
                  circleBorderWidth={0}
                  backgroundActive={'#FFB229'}
                  backgroundInactive={'#BBB5B5'}
                  circleActiveColor={'#FFFFFF'}
                  circleInActiveColor={'#FFFFFF'}
                  changeValueImmediately={true}
                  changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                  innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                  outerCircleStyle={{}} // style for outer animated circle
                  renderActiveText={false}
                  renderInActiveText={false}
                  switchLeftPx={2.5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                  switchRightPx={2.5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                  switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                  switchBorderRadius={18} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                />
              </View>
              <Label style={styles.setting_divided}></Label>
            </TouchableOpacity>
            <View  style={styles.setting_item_view}>
              <Label style={styles.item_name_label}>Comments</Label>
              <View style={styles.item_img_view}>
                <DropDownPicker 
                  open={this.state.comments_open}
                  style={styles.everyoneButton}
                  value={this.state.comments_value}
                  items={this.state.option_data}
                  setOpen={(value) => this.handleCommentsOpen(value)}
                  setValue={(callback) => this.handleCommentsValue(callback)}
                  searchable={false}
                  textStyle={styles.everyoneButtonText}
                  closeAfterSelecting={true}
                  arrowIconStyle={styles.proffesionImage}
                  dropDownContainerStyle={styles.dropdownContainer}
                  listItemContainerStyle={styles.listitemContainer}
                  zIndex={5000}
                />
              </View>
              <Label style={styles.setting_divided}></Label>
            </View>
            <View  style={styles.setting_item_view}>
              <Label style={styles.item_name_label}>Mentions</Label>
              <View style={styles.item_img_view}>
                <DropDownPicker 
                  open={this.state.mentions_open}
                  style={styles.everyoneButton}
                  value={this.state.mentions_value}
                  items={this.state.option_data}
                  setOpen={(value) => this.handleMentionsOpen(value)}
                  setValue={(callback) => this.handleMentionsValue(callback)}
                  searchable={false}
                  textStyle={styles.everyoneButtonText}
                  closeAfterSelecting={true}
                  arrowIconStyle={styles.proffesionImage}
                  dropDownContainerStyle={styles.dropdownContainer}
                  listItemContainerStyle={styles.listitemContainer}
                  zIndex={4000}
                />
              </View>
              <Label style={styles.setting_divided}></Label>
            </View>
            <View  style={styles.setting_item_view}>
              <Label style={styles.item_name_label}>Direct Messages</Label>
              <View style={styles.item_img_view}>
                <DropDownPicker 
                  open={this.state.direct_open}
                  style={styles.everyoneButton}
                  value={this.state.direct_value}
                  items={this.state.option_data}
                  setOpen={(value) => this.handleDirectOpen(value)}
                  setValue={(callback) => this.handleDirectValue(callback)}
                  searchable={false}
                  textStyle={styles.everyoneButtonText}
                  closeAfterSelecting={true}
                  arrowIconStyle={styles.proffesionImage}
                  dropDownContainerStyle={styles.dropdownContainer}
                  listItemContainerStyle={styles.listitemContainer}
                  zIndex={3000}
                />
              </View>
              <Label style={styles.setting_divided}></Label>
            </View>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}