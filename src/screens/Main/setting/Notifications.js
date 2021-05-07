import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import { Switch } from 'react-native-switch';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './NotificationsStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notification_data: [
        {notificationid:'001', notificationtitle:'Likes/Comments', notificationselected: true},
        {notificationid:'002', notificationtitle:'Direct Messages', notificationselected: true},
        {notificationid:'003', notificationtitle:'Project Messages', notificationselected: false},
        {notificationid:'004', notificationtitle:'Read Reciepts', notificationselected: false},
        {notificationid:'005', notificationtitle:'New Followers', notificationselected: false},
        {notificationid:'006', notificationtitle:'Schedule Notices', notificationselected: false},
        {notificationid:'007', notificationtitle:'Billing From Notices', notificationselected: false},
        // {notificationid:'008', notificationtitle:'Schedule Notifications', notificationselected: false},
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
    item.notificationselected = !item.notificationselected
    const updateNotifications = this.state.notification_data.map((obj, index) => {
      return obj.notificationid === item.notificationid ? item : obj;
    });
    this.setState({notification_data: updateNotifications})
  }
  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={styles.setting_item_view} onPress={() => this.handleSelection(item)}>
        <Label style={styles.item_name_label}>{item.notificationtitle}</Label>
        <View style={styles.item_img_view}>
          <Switch
            value={item.notificationselected}
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
              <Label style={styles.navTitleLabel}>Notifications</Label>
              <View style={styles.rightNavView}></View>
            </View>
            <View style={styles.setting_content_view}>
              <FlatList
                data={this.state.notification_data}
                renderItem={({item}) => this._renderItem(item)}
                keyExtractor={item => item.notificationid}
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