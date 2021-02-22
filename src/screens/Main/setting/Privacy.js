import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import { Switch } from 'react-native-switch';

import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './PrivacyStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const right_arrow_icon = require('../../../../assets/image/right_arrow_icon.png');
const downArrowImage = require('../../../../assets/image/down_arrow_blue_icon.png')

export default class Privacy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      privacy_data: [
        {privacyid:'001', privacytitle:'Blocked Accounts'},
        {privacyid:'002', privacytitle:'Muted Accounts'},
        {privacyid:'003', privacytitle:'Photo Taging', privacyselected: true},
        {privacyid:'004', privacytitle:'Comments'},
        {privacyid:'005', privacytitle:'Mentions'},
        {privacyid:'006', privacytitle:'Direct Messages'},
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
  
  handleToggleSwitch = (item) => {
    item.privacyselected = !item.privacyselected
    const updatePrivacy = this.state.privacy_data.map((obj, index) => {
      return obj.privacyid === item.privacyid ? item : obj;
    });
    this.setState({privacy_data: updatePrivacy})
  }

  handleEveryone = () => {
    
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={styles.setting_item_view} onPress={() => this.handleSelection(item)}>
        <Label style={styles.item_name_label}>{item.privacytitle}</Label>
        <View style={styles.item_img_view}>
          {item.privacytitle === 'Blocked Accounts' || item.privacytitle === 'Muted Accounts' ? 
            <Image style={styles.item_right_image} source={right_arrow_icon}/>
            :
            item.privacytitle === 'Photo Taging' ?
            <Switch
              value={item.privacyselected}
              onValueChange={(val) => this.handleToggleSwitch(item)}
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
            :
            <TouchableOpacity style={styles.everyoneButton} onPress={this.handleEveryone}>
              <Text style={styles.everyoneButtonText}>Everyone</Text>
              <Image style={styles.proffesionImage} source={downArrowImage}/>
            </TouchableOpacity>
          }
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
              <Label style={styles.navTitleLabel}>{'Privacy & Safety'}</Label>
              <View style={styles.rightNavView}></View>
            </View>
            <View style={styles.setting_content_view}>
              <FlatList
                data={this.state.privacy_data}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={item => item.privacyid}
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