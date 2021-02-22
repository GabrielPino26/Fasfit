import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './NotificationPurchaseStyle';

export default class NotificationPurchase extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      purchase_data: [
        {purchase_id:'001', purchase_name: 'Puma', purchase_content: 'Men Black Mesh Mid-Top Flex racer 19 IDP Running Shoes', date: '30/07/2020', time: '02:11 AM', purchase_img: require('../../../../assets/image/test1.png'), purchase_price: 450, order_progress: 4},
        {purchase_id:'002', purchase_name: 'Levis', purchase_content: 'Women White Solid Hooded Sweatshirt', date: '30/07/2020', time: '02:11 AM', purchase_img: require('../../../../assets/image/test1.png'), purchase_price: 150, order_progress: 2},
      ],
      selected_item_purchase_id: '',
    }
  }

  componentDidMount() {
  }

  handleSelection = (purcahseId) => {
    this.setState({selected_item_purchase_id: purcahseId});
  }

  handleTrackPurchase = (item) => {
    this.props.onClickTrackPurchase(item);
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity  style={this.state.selected_item_purchase_id == item.purchase_id ? styles.selected_purchase_item_view : styles.purchase_item_view} onPress={() => this.handleSelection(item.purchase_id)}>
        <View style={styles.item_info_view}>
          <View style={styles.purchase_view}>
            <Label style={styles.item_purchase_label}>Purchase</Label>
            <TouchableOpacity style={styles.track_purchase_button} onPress={() => this.handleTrackPurchase(item)}>
              <Label style={styles.track_purchase_button_title}>Track Purchase</Label>
            </TouchableOpacity>
          </View>
          <Label style={styles.item_name_label}>{item.purchase_name}</Label>
          <Label style={styles.item_content_label}>{item.purchase_content}</Label>
          <Image style={styles.item_purchase_image} source={item.purchase_img}/>
          <Label style={styles.item_datetime_label}>{item.date} | {item.time}</Label>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.purchase_data}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={item => item.purchase_id}
          style={styles.purchase_list_view}
          extraData={[]}
        />
      </View>
    );
  }
}