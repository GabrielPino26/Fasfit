import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label, CheckBox } from 'native-base';

import Stars from 'react-native-stars';
import { styles } from './FaslanceLocationStyle';

export default class FaslanceLocation extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      location_data: [
        {userid:'001', username: 'Diana Vreeland', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Work bio The unfortunate, yet truly exciting thing about', user_hourly: '50', user_address: '39  Broomfield Place, Stokesby, NR29 3DA', user_feedback: '5.0', user_follow: '88', user_checked: true, user_type: 'hire'},
        {userid:'002', username: 'Diana Vreeland', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Work bio The unfortunate, yet truly exciting thing about', user_hourly: '50', user_address: '39  Broomfield Place, Stokesby, NR29 3DA', user_feedback: '4.6', user_follow: '88', user_checked: true, user_type: 'pov'},
        {userid:'003', username: 'Diana Vreeland', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Work bio The unfortunate, yet truly exciting thing about', user_hourly: '50', user_address: '39  Broomfield Place, Stokesby, NR29 3DA', user_feedback: '4.0', user_follow: '88', user_checked: true, user_type: 'hire'},
        {userid:'004', username: 'Diana Vreeland', user_img: require('../../../../assets/image/profile_avatar.png'), item_detail: 'Work bio The unfortunate, yet truly exciting thing about', user_hourly: '50', user_address: '39  Broomfield Place, Stokesby, NR29 3DA', user_feedback: '3.4', user_follow: '88', user_checked: true, user_type: 'pov'},
      ],
      selected_item_userid: '',
      
    }
  }

  componentDidMount() {
  }

  handleSelection = (item) => {
    this.setState({selected_item_userid: item.userid});
    this.props.navigation.navigate('FaslanceDetail', { item });
  }

  handleCheckedItem = (item, value) => {
    // item.user_checked = value
  }
  handleProfile = () => {}

  handleHire = () => {}

  handlePlus = () => {}

  handleMinus = () => {}

  _renderItem = (item, index) => {
    return (
      <TouchableOpacity  style={this.state.selected_item_userid == item.userid ? styles.selected_location_item_view : styles.location_item_view} onPress={() => this.handleSelection(item)}>
        <View style={styles.list_item_view}>
          <View style={styles.left_item_view}>
            <TouchableOpacity style={styles.item_profile_button} onPress={this.handleProfile}>
              <Image style={styles.item_profile_button_image} source={item.user_img}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_hire_button} onPress={this.handleHire}>
              <Text style={styles.item_hire_button_label}>HIRE</Text>
            </TouchableOpacity>
            <View style={styles.add_remove_view}>
              <TouchableOpacity style={styles.item_plus_button} onPress={this.handlePlus}>
                <Text style={styles.item_plus_button_label}>+</Text>
              </TouchableOpacity>
              <Text style={styles.item_divide_label}>/</Text>
              <TouchableOpacity style={styles.item_plus_button} onPress={this.handleMinus}>
                <Text style={styles.item_plus_button_label}>-</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.item_follow_label}>{item.user_follow}%</Text>
          </View>
          <View style={styles.right_item_view}>
            <View style={styles.checkbox_view}>
              <Label style={styles.item_username_label}>{item.username}</Label>
              <CheckBox style={styles.checkbox}  value={item.user_checked} onValueChange={(value) => this.handleCheckedItem(item, value)}></CheckBox>
            </View>
            <Label style={styles.item_userdetail_label}>{item.item_detail}</Label>
            <Label style={styles.item_hourly_label}>${item.user_hourly}/hour</Label>
            <Label style={styles.item_userdetail_label}>{item.user_address}</Label>
            <View style={styles.feedback_view}>
              <Label style={styles.item_feedback_label}>{item.user_feedback}</Label>
              <View style={styles.stars_view}> 
                <Stars
                  display={parseFloat(item.user_feedback)}
                  spacing={8}
                  count={5}
                  starSize={14}
                  fullStar= {require('../../../../assets/image/star_filled.png')}
                  emptyStar= {require('../../../../assets/image/star_empty.png')}/>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.location_data}
          renderItem={({item, index}) => this._renderItem(item, index)}
          keyExtractor={item => item.userid}
          style={styles.location_list_view}
          extraData={[]}
        />
      </View>
    );
  }
}