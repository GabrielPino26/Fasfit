import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './WorldInGroupStyle';

export default class WorldInGroup extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      worldwide_data: [
        {userid:'001', username: 'Diana Vreeland', date: '30/07/2020', time: '02:11 AM', item_img: require('../../../../assets/image/test1.png'), item_detail_1: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.', item_detail_2: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.'},
        {userid:'002', username: 'Diana Vreeland', date: '30/07/2020', time: '02:11 AM', item_img: require('../../../../assets/image/test.png'), item_detail_1: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.', item_detail_2: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.'},
        {userid:'003', username: 'Diana Vreeland', date: '30/07/2020', time: '02:11 AM', item_img: require('../../../../assets/image/test1.png'), item_detail_1: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.', item_detail_2: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.'},
        {userid:'004', username: 'Diana Vreeland', date: '30/07/2020', time: '02:11 AM', item_img: require('../../../../assets/image/test.png'), item_detail_1: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.', item_detail_2: 'Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.'},
      ],
      selected_item_userid: '',
    }
  }

  componentDidMount() {
  }

  handleSelection = (userid) => {
    this.setState({selected_item_userid: userid});
  }

  _renderItem = (item, index) => {
    if(index % 2 == 0) {
      return (
        <TouchableOpacity  style={this.state.selected_item_userid == item.userid ? styles.selected_worldwide_item_view : styles.worldwide_item_view} onPress={() => this.handleSelection(item.userid)}>
          <View style={styles.item_img_view}>
            <Image style={styles.item_image} source={item.item_img}/>
            <Label style={styles.item_detail_2_label}>{item.item_detail_2}</Label>
          </View>
          <View style={styles.item_info_view}>
            <Label style={styles.item_name_label}>{item.username}</Label>
            <Label style={styles.item_datetime_label}>{item.date} | {item.time}</Label>
            <Label style={styles.item_detail_1_label}>{item.item_detail_1}</Label>
          </View>
        </TouchableOpacity>
      )
    }else{
      return (
        <TouchableOpacity  style={this.state.selected_item_userid == item.userid ? styles.selected_worldwide_item_view : styles.worldwide_item_view} onPress={() => this.handleSelection(item.userid)}>
          <View style={styles.item_info_view}>
            <Label style={styles.item_name_label}>{item.username}</Label>
            <Label style={styles.item_datetime_label}>{item.date} | {item.time}</Label>
            <Label style={styles.item_detail_1_label}>{item.item_detail_1}</Label>
          </View>
          <View style={styles.item_img_view}>
            <Image style={styles.item_image} source={item.item_img}/>
            <Label style={styles.item_detail_2_label}>{item.item_detail_2}</Label>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.worldwide_data}
          renderItem={({item, index}) => this._renderItem(item, index)}
          keyExtractor={item => item.userid}
          style={styles.worldwide_list_view}
          extraData={[]}
        />
      </View>
    );
  }
}