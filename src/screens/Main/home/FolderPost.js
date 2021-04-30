import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { Container, Item, StyleProvider, Label, Text } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './FolderPostStyle';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
});

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
class FolderPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  handleBack = () => {
    this.props.navigation.state.params.updateData();
    this.props.navigation.goBack();
  }

  handleMediaPost = () => {
    this.props.navigation.navigate('MediaPost');
  }

  handleTextPost = () => {
    this.props.navigation.navigate('FolderTextPost');
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <Label style={styles.navTitleLabel}>Folder Post</Label>
              <TouchableOpacity style={styles.notificationBackButton} onPress={() => this.handleBack()}>
                <Image style={styles.notificationBackButtonImage} source={back_button_icon}/>
              </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView style={styles.keyboard_view}>
              <TouchableOpacity style={styles.item_button} onPress={() => this.handleMediaPost()}>
                <Text style={styles.item_button_title}>Media Post</Text>
              </TouchableOpacity>
              <Label style={styles.or_title}>or</Label>
              <TouchableOpacity style={styles.item_button} onPress={() => this.handleTextPost()}>
                <Text style={styles.item_button_title}>Text Post</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderPost);