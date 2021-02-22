import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './SignupStyle';
import { storage } from '../../../helper/storage'

const welcome_background = require('../../../../assets/image/welcome_background.png');
const back_button = require('../../../../assets/image/back_button.png');

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handlePersonal = async () => {
    await storage.setUserType('personal')
    this.props.navigation.navigate('SignupDetail')
  }

  handleBusiness = async () => {
    await storage.setUserType('business')
    this.props.navigation.navigate('SignupDetail')
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.down_content}>
            <Image style={styles.backgroundImage} source={welcome_background} />
          </View>
          <View style={styles.up_content}>
            <TouchableOpacity style={styles.signupBackButton} onPress={this.handleBack}>
              <Image style={styles.signupBackButtonImage} source={back_button}/>
            </TouchableOpacity>
            <Label style={styles.signupContentLabel}>The characterization of your account doesn’t limit the use of features provided by Fasfit. It helps Fasfit Technologies in increasing user customization & enjoyment of our app</Label>
            <View style={styles.signupButtonContent}>
              <TouchableOpacity style={styles.personal_button} onPress={this.handlePersonal}>
                  <Text style={styles.personal_button_title}>Personal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.business_button} onPress={this.handleBusiness}>
                  <Text style={styles.business_button_title}>Business</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signupCategoryContent}>
              <Label style={styles.signupPersonalCategory}>Client/customer</Label>
              <Label style={styles.signupBusinessCategory}>Hairstyle/designer/stylist/makeup artist/model/digital artist/illustrator/graphic designer/brand/writer/photographer</Label>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}