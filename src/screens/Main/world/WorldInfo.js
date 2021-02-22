import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './WorldInfoStyle';

import WorldWide from './WorldWide';
import WorldInGroup from './WorldInGroup';
import WorldOutGroup from './WorldOutGroup';

import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  getWorldList,
  getWorldDetailByName
} from '../../../actions/world'

const back_button_icon = require('../../../../assets/image/white_back_icon.png');
const search_button_icon = require('../../../../assets/image/search_icon.png');

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  getWorldList: params => dispatch(getWorldList(params)),
  getWorldDetailByName: params => dispatch(getWorldDetailByName(params)),
});

class WorldInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      world_names: [],
      world_post: [],
      selectedWorldTab: 0,
      selectedWorldwideTab: true,
      selectedIngroupTab: false,
      selectedOutgroupTab: false,
    }
  }

  async componentDidMount() {
    await this.getWorldNames()
  }

  async getWorldNames() {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
    }
    console.log("params: ", params);
    const { getWorldList } = this.props
    getWorldList(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        let worldNames = JSON.parse(JSON.stringify(response['data']))
        this.setState({world_post: []})
        for (let worldName of worldNames) {
          await this.getWorldPostByName(worldName)
        }
        this.setState({world_names: worldNames})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  async getWorldPostByName(worldName) {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
      world_name: worldName
    }
    console.log("params: ", params);
    const { getWorldDetailByName } = this.props
    getWorldDetailByName(params).then(async response => {
      if(response) {
        // console.log("response_user: ", JSON.parse(JSON.stringify(response['data'])))
        let worldPosts = JSON.parse(JSON.stringify(response['data']))
        let world_post = this.state.world_post
        world_post.push(worldPosts)
        this.setState({world_post: world_post})
      }else{
        Alert.alert("Error", "Get User is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })

  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleTabWorld = (index) => {
    if(this.state.selectedWorldTab != index) {
      this.setState({selectedWorldTab: index})
    }
  }

  // handleTabIngroup = () => {
  //   if(!this.state.selectedIngroupTab) {
  //     this.setState({selectedWorldwideTab: false, selectedIngroupTab: true, selectedOutgroupTab: false});
  //   }
  // }

  // handleTabOutgroup = () => {
  //   if(!this.state.selectedOutgroupTab) {
  //     this.setState({selectedWorldwideTab: false, selectedIngroupTab: false, selectedOutgroupTab: true});
  //   }
  // }

  _renderItem = (item, index) => {
    if(index % 2 == 0) {
      return (
        <TouchableOpacity  style={styles.worldwide_item_view} onPress={() => this.handleSelection(item['user_id'])}>
          <View style={styles.item_img_view}>
            <Image style={styles.item_image} source={{uri: item['image']}}/>
            <Label style={styles.item_detail_2_label}>{item['content2']}</Label>
          </View>
          <View style={styles.item_info_view}>
            <Label style={styles.item_name_label}>{item['title']}</Label>
            <Label style={styles.item_datetime_label}>{item['createdAt']}</Label>
            <Label style={styles.item_detail_1_label}>{item['content1']}</Label>
          </View>
        </TouchableOpacity>
      )
    }else{
      return (
        <TouchableOpacity  style={styles.worldwide_item_view} onPress={() => this.handleSelection(item['user_id'])}>
          <View style={styles.item_info_view}>
            <Label style={styles.item_name_label}>{item['title']}</Label>
            <Label style={styles.item_datetime_label}>{item['createdAt']}</Label>
            <Label style={styles.item_detail_1_label}>{item['content1']}</Label>
          </View>
          <View style={styles.item_img_view}>
            <Image style={styles.item_image} source={item['image']}/>
            <Label style={styles.item_detail_2_label}>{item['content2']}</Label>
          </View>
        </TouchableOpacity>
      )
    }
  }


  render() {
    let nTabIndex = 0
    let worldData = []
    if(this.state.world_post.length > 0) {
      worldData = this.state.world_post[this.state.selectedWorldTab]
    }
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <View style={styles.tabView}>
              {this.state.world_names.map((worldName, index) => {
                {this.state.selectedWorldTab == nTabIndex ?
                  <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabWorld(index)}>
                    <Label style={styles.selected_tab_worldwide_label}>{worldName}</Label>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabWorld(index)}>
                    <Label style={styles.normal_tab_label}>{worldName}</Label>
                  </TouchableOpacity>
                }
                nTabIndex += 1;
              })}
              {/* {this.state.selectedIngroupTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabIngroup}>
                  <Label style={styles.selected_tab_ingroup_label}>#Ingroup</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabIngroup}>
                  <Label style={styles.normal_tab_label}>#Ingroup</Label>
                </TouchableOpacity>
              }
              {this.state.selectedOutgroupTab ?
                <TouchableOpacity style={styles.selected_tab_button} onPress={this.handleTabOutgroup}>
                  <Label style={styles.selected_tab_outgroup_label}>#Outgroup</Label>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.normal_tab_button} onPress={this.handleTabOutgroup}>
                  <Label style={styles.normal_tab_label}>#Outgroup</Label>
                </TouchableOpacity>
              } */}
            </View>
            <View style={styles.tab_content_view}>
              <FlatList
                data={worldData}
                renderItem={({item, index}) => this._renderItem(item, index)}
                keyExtractor={item => item.userid}
                style={styles.world_list_view}
                extraData={[]}
              />
              {/* {this.state.selectedWorldwideTab ? 
                <WorldWide />
                : null
              }
              {this.state.selectedIngroupTab ? 
                <WorldInGroup />
                : null
              }
              {this.state.selectedOutgroupTab ? 
                <WorldOutGroup />
                : null
              } */}
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldInfo);