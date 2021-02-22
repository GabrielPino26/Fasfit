import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { Container, Text, StyleProvider, Label, CheckBox } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';
import Stars from 'react-native-stars';

import { styles } from './FaslanceInfoStyle';

import FaslanceLocation from './FaslanceLocation';
import FaslanceStyles from './FaslanceStyles';
import FaslancePrice from './FaslancePrice';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  getFaslanceList
} from '../../../actions/faslance'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  getFaslanceList: params => dispatch(getFaslanceList(params)),
});

class FaslanceInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      faslance_data: [],
      selectedTab: 0,
      tabList: ['Designer', 'Stylist', 'Model', 'Brand', 'Writer'],
      selectedLocationTab: true,
      selectedStylesTab: false,
      selectedPriceTab: false,
    }
  }

  async componentDidMount() {
    await this.getFaslanceList()
  }

  async getFaslanceList() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
      profession: this.state.tabList[this.state.selectedTab]
    }
    console.log("params: ", params);
    const { getFaslanceList } = this.props
    getFaslanceList(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        this.setState({faslance_data: JSON.parse(JSON.stringify(response['data']))})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })

  }

  handleTabLocation = async (index) => {
    if(this.state.selectedTab != index) {
      this.setState({selectedTab: index})
      await this.getFaslanceList()
    }
  }

  // handleTabStyles = () => {
  //   if(!this.state.selectedStylesTab) {
  //     this.setState({selectedLocationTab: false, selectedStylesTab: true, selectedPriceTab: false});
  //   }
  // }

  // handleTabPrice = () => {
  //   if(!this.state.selectedPriceTab) {
  //     this.setState({selectedLocationTab: false, selectedStylesTab: false, selectedPriceTab: true});
  //   }
  // }

  handleSelection = (item) => {
    this.props.navigation.navigate('FaslanceDetail', { item });
  }

  handleProfile = () => {}

  handleHire = () => {}

  handlePlus = () => {}

  handleMinus = () => {}

  _renderItem = (item, index) => {
    return (
      <TouchableOpacity  style={styles.location_item_view} onPress={() => this.handleSelection(item)}>
        <View style={styles.list_item_view}>
          <View style={styles.left_item_view}>
            <TouchableOpacity style={styles.item_profile_button} onPress={this.handleProfile}>
              <Image style={styles.item_profile_button_image} source={{uri: item['profile_image']}}/>
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
            {/* <Text style={styles.item_follow_label}>{item.user_follow}%</Text> */}
          </View>
          <View style={styles.right_item_view}>
            <View style={styles.checkbox_view}>
              <Label style={styles.item_username_label}>{item['username']}</Label>
              {/* <CheckBox style={styles.checkbox}  value={item.user_checked} onValueChange={(value) => this.handleCheckedItem(item, value)}></CheckBox> */}
            </View>
            <Label style={styles.item_userdetail_label}>{item['summary']}</Label>
            <Label style={styles.item_hourly_label}>${item['prices']}/hour</Label>
            <Label style={styles.item_userdetail_label}>{item['location']}</Label>
            <View style={styles.feedback_view}>
              <Label style={styles.item_feedback_label}></Label>
              <View style={styles.stars_view}> 
                <Stars
                  display={parseFloat(5)}
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
    let nTabIndex = 0
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.tabView}>
              {this.state.tabList.map((tabName, index) => {
                {this.state.selectedTab == nTabIndex ?
                  <TouchableOpacity style={styles.selected_tab_button} onPress={async () => {await this.handleTabLocation(index)}}>
                    <Label style={styles.selected_tab_info_label}>{tabName}</Label>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.normal_tab_button} onPress={async () => {await this.handleTabLocation(index)}}>
                    <Label style={styles.normal_tab_label}>{tabName}</Label>
                  </TouchableOpacity>
                }
                nTabIndex += 1;
                })
              }
              {/* {this.state.selectedLocationTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabLocation}>
                  <Label style={styles.selected_tab_info_label}>Location</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabLocation}>
                  <Label style={styles.normal_tab_label}>Location</Label>
                </TouchableOpacity>
              }
              {this.state.selectedStylesTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabStyles}>
                  <Label style={styles.selected_tab_info_label}>Styles</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabStyles}>
                  <Label style={styles.normal_tab_label}>Styles</Label>
                </TouchableOpacity>
              }
              {this.state.selectedPriceTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabPrice}>
                  <Label style={styles.selected_tab_info_label}>Price</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabPrice}>
                  <Label style={styles.normal_tab_label}>Price</Label>
                </TouchableOpacity>
              } */}
            </View>
            <View style={styles.tab_content_view}>
              <FlatList
                data={this.state.faslance_data}
                renderItem={({item, index}) => this._renderItem(item, index)}
                keyExtractor={item => item['user_id']}
                style={styles.location_list_view}
                extraData={[]}
              />
{/* 
              {this.state.selectedLocationTab ? 
                <FaslanceLocation {...this.props} />
                : null
              }
              {this.state.selectedStylesTab ? 
                <FaslanceStyles {...this.props} />
                : null
              }
              {this.state.selectedPriceTab ? 
                <FaslancePrice />
                : null
              } */}
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FaslanceInfo);
