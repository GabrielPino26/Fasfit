import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import StepIndicator from 'react-native-step-indicator';

import { styles } from './TrackPurchaseStyle';

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/search_icon.png');

const labels = ["Order Placed","Order Accepted","Shipped","At local FedEx","Expect to deliver"];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  labelAlign: 'flex-start',
  currentStepLabelColor: '#fe7013',
}
export default class Notification extends Component {

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

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.notificationBackButton} onPress={this.handleBack}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
              <Label style={styles.navTitleLabel}>Track Purchase</Label>
              <View style={styles.navRightView}></View>
            </View>
            <View style={styles.content_view}>
              <Label style={styles.purchaseTitleLabel}>{this.props.navigation.state.params.item.purchase_name}</Label>
              <Label style={styles.purchaseContentLabel}>{this.props.navigation.state.params.item.purchase_content}</Label>
              <Label style={styles.purchasePriceLabel}>${this.props.navigation.state.params.item.purchase_price}</Label>
              <Image style={styles.purchaseImage} source={this.props.navigation.state.params.item.purchase_img}/>
              <Label style={styles.purchaseDatetimeLabel}>{this.props.navigation.state.params.item.date} | {this.props.navigation.state.params.item.time}</Label>
              <View style={styles.progressStepIndicator}>
                <StepIndicator
                    customStyles={customStyles}
                    direction = "vertical"
                    currentPosition={this.props.navigation.state.params.item.order_progress}
                    labels={labels}
                />
              </View>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}