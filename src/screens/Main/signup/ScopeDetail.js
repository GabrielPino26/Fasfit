import React, { Component } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Text, StyleProvider, Label } from 'native-base';
import getTheme from '../../../native-base-theme/components'
import theme from '../../../native-base-theme/variables/custom';

import { styles } from './ScopeDetailStyle';

import { FlatGrid } from 'react-native-super-grid';
import { storage } from '../../../helper/storage';
import { connect } from 'react-redux';
import {
  setScope
} from '../../../actions/authentication'

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  setScope: params => dispatch(setScope(params)),
});

class ScopeDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      welcome_background: require('../../../../assets/image/welcome_background.png'),
      back_button: require('../../../../assets/image/back_button.png'),
      next_button: require('../../../../assets/image/next_button.png'),
      scopeData: [{title: "Clothing Type", subData: ["Shirt", "Trousers", "Skirt"]},
                  {title: "Gender", subData: ["Man", "Woman"]},
                  {title: "Season", subData: ["Spring", "Summer", "Autumn", "Winter"]},
                  {title: "Desired Look", subData: []},
                  {title: "Men's Wear", subData: []},
                  {title: "Women's Wear", subData: []},
                  {title: "Fashion", subData: []},
                  {title: "Accessories", subData: []},
                  {title: "Footwear", subData: []},
                ],
      selectedItem: null,
      refresh: false,
      selectedSubItem: '',
      scopeItems: []
    }
  }

  componentDidMount() {
  }

  handleItem = (scopeItem) => {
    this.setState({selectedItem: scopeItem, refresh: !this.state.refresh});
  }

  handleSubItem = (scopeSubItem) => {
    let scopeArray = this.state.scopeItems
    if(scopeArray.length > 0) {
      if(scopeArray.includes(scopeSubItem)) {
        scopeArray.splice(scopeArray.indexOf(scopeSubItem), 1);
      }else{
        scopeArray.push(scopeSubItem)
      }
    }else{
      scopeArray.push(scopeSubItem)
    }
    this.setState({scopeItems: scopeArray});
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleNext = async () => {
    let userInfo  = await storage.getUserInfo();
    let userId = userInfo['_id']
    let params = {
      user_id: userId,
      scope_type: this.state.scopeItems
    }
    console.log("params: ", params);
    const { setScope } = this.props
    setScope(params).then(async response => {
      if(response) {
        this.props.navigation.navigate('Home')
      }else{
        Alert.alert("Error", "Set Scope is failed.")
      }
    }).catch(err => {
      Alert.alert("Error", err)
    })
  }

  _renderItem = (scopeItem) => {
    return (
      <View>
        {this.state.selectedItem && scopeItem.title == this.state.selectedItem.title ?
          <View>
            <TouchableOpacity style={styles.selected_item_button} onPress={() => this.handleItem(scopeItem)}>
              <Text style={styles.selected_item_button_title}>{scopeItem.title}</Text>
            </TouchableOpacity>
            {scopeItem.subData.length > 0 ? 
              <View style={styles.subData_contentView}>
                <FlatGrid 
                  itemDimension={100}
                  data={scopeItem.subData}
                  style={styles.grid_view}
                  spacing={5}
                  renderItem={({item}) => this._renderGridItem(item)}
                />
              </View>
              : null
            }
          </View>
        :
          <TouchableOpacity style={styles.item_button} onPress={() => this.handleItem(scopeItem)}>
            <Text style={styles.item_button_title}>{scopeItem.title}</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }

  _renderGridItem = (scopeSubItem) => {
    return (
      <View>
        {this.state.scopeItems.includes(scopeSubItem) ?
          <TouchableOpacity style={styles.selected_sub_item_button} onPress={() => this.handleSubItem(scopeSubItem)}>
            <Text style={styles.selected_sub_item_button_title}>{scopeSubItem}</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity style={styles.sub_item_button} onPress={() => this.handleSubItem(scopeSubItem)}>
            <Text style={styles.sub_item_button_title}>{scopeSubItem}</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }
  
  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <View style={styles.content}>
            <TouchableOpacity style={styles.backButton} onPress={this.handleBack}>
              <Image style={styles.backButtonImage} source={this.state.back_button}/>
            </TouchableOpacity>
            <Label style={styles.scopeTitleLabel}>Your Scope</Label>
            <TouchableOpacity style={styles.nextButton} onPress={this.handleNext}>
              <Image style={styles.backButtonImage} source={this.state.next_button}/>
            </TouchableOpacity>
            <FlatList
              data={this.state.scopeData}
              renderItem={({item}) => this._renderItem(item)}
              keyExtractor={item => item.title}
              style={styles.list_view}
              extraData={this.state.refresh}
            />
          </View>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScopeDetail);