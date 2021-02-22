import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './FaslanceStylesStyle';

export default class FaslanceStyles extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      styles_data: [
        {userid:'001', username: '@amiyah.brook', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'002', username: '@ammaar.lang', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'003', username: '@amiyah.brook', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'004', username: '@ammaar.lang', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'005', username: '@amiyah.brook', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'006', username: '@ammaar.lang', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'007', username: '@amiyah.brook', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'008', username: '@ammaar.lang', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'009', username: '@amiyah.brook', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
        {userid:'010', username: '@ammaar.lang', profile_img: require('../../../../assets/image/profile_avatar.png'), last_message: 'Stay hydrated and make sure your clothes match'},
      ],
      selected_item_userid: '',
    }
  }

  componentDidMount() {
  }

  handleSelection = (item) => {
    this.setState({selected_item_userid: item.userid});
    this.props.navigation.navigate('MessageChat', { item });
  }

  _renderItem = (item, index) => {
    return (
      <TouchableOpacity  style={this.state.selected_item_userid == item.userid ? styles.selected_message_item_view : styles.message_item_view} onPress={() => this.handleSelection(item)}>
        <View style={styles.item_img_view}>
          <Image style={styles.item_profile_image} source={item.profile_img}/>
        </View>
        <View style={styles.item_info_view}>
          <Label style={styles.item_name_label}>{item.username}</Label>
          <Label style={styles.item_message_label}>{item.last_message}</Label>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.styles_data}
          renderItem={({item, index}) => this._renderItem(item, index)}
          keyExtractor={item => item.userid}
          style={styles.worldwide_list_view}
          extraData={[]}
        />
      </View>
    );
  }
}