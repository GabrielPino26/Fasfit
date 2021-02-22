import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Text, StyleProvider, Label, Item, Input } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Switch } from 'react-native-switch';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './AddAccountStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const right_arrow_icon = require('../../../../assets/image/right_arrow_icon.png');
const downArrowImage = require('../../../../assets/image/down_arrow_icon.png')


export default class AddAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phonenumber: '',
      location: '',
      language: '',
      links: '',
      collab_selected: true,
      
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  changeUsername = (value) => {    
    this.setState({username: value});
    // this.props.onChangeEmail(value);
  }

  changeEmail = (value) => {    
    this.setState({email: value});
    // this.props.onChangeEmail(value);
  }

  changePhoneNumber = (value) => {    
    this.setState({phonenumber: value});
    // this.props.onChangeEmail(value);
  }

  handleAddAccount = () => {

  }

  handleLocation = () => {

  }

  handleLanguage = () => {

  }

  handleLink = () => {

  }

  handleToggleSwitch = (val) => {
    this.setState({collab_selected: val})
  }

  handleDeactivate = () => {
    
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
              <Label style={styles.navTitleLabel}>{'Add Account'}</Label>
              <View style={styles.rightNavView}></View>
            </View>
            <KeyboardAwareScrollView style={styles.setting_content_view}>
              <Label style={styles.accountSubTitleLabel}>Username</Label>
              <Item floatingLabel style={styles.underlineStyle}>
                <Input placeholder='Please enter your username' onChangeText={this.changeUsername} />
              </Item>                 
              <Label style={styles.accountSubTitleLabel}>Email</Label>
              <Item floatingLabel style={styles.underlineStyle}>
                <Input placeholder='Please enter your email address' onChangeText={this.changeEmail} />
              </Item>                 
              <Label style={styles.accountSubTitleLabel}>Phone number</Label>
              <Item floatingLabel style={styles.underlineStyle}>
                <Input placeholder='Please enter your phone number' keyboardType='phone-pad' onChangeText={this.changePhoneNumber} />
              </Item>
              <Label style={styles.accountSubTitleLabel}>Location</Label>
              <TouchableOpacity style={styles.locationButton} onPress={this.handleLocation}>
                <Text style={styles.locationButtonText}> Manhattan</Text>
              </TouchableOpacity>
              <Label style={styles.accountSubTitleLabel}>Language</Label>
              <TouchableOpacity style={styles.languageButton} onPress={this.handleLanguage}>
                <Text style={styles.languageButtonText}> English</Text>
                <Image style={styles.proffesionImage} source={downArrowImage}/>
              </TouchableOpacity>
              <Label style={styles.accountSubTitleLabel}>Links</Label>
              <TouchableOpacity style={styles.languageButton} onPress={this.hanldeLink}>
                <Text style={styles.languageButtonText}> Facebook</Text>
                <Image style={styles.proffesionImage} source={downArrowImage}/>
              </TouchableOpacity>
              <View  style={styles.collab_view}>
                <Label style={styles.collab_name_label}>Collab</Label>
                <View style={styles.collab_switch_view}>
                  <Switch
                    value={this.state.collab_selected}
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
              </View>
              <TouchableOpacity style={styles.locationButton} onPress={this.handleDeactivate}>
                <Text style={styles.locationButtonText}>Deactivate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.accountButton} onPress={this.handleAddAccount}>
                <Text style={styles.accountButtonTitle}>Add</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}