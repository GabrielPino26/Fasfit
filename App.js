/**
 * Fasfit
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';

import store from './src/redux/store';

import { pushNotifications } from './src/services';

import Welcome from './src/screens/Main/welcome/Welcome';
import Login from './src/screens/Main/auth/Login';
import Signup from './src/screens/Main/signup/Signup';
import PersonalSignup from './src/screens/Main/signup/PersonalSignup';
import BusinessSignup from './src/screens/Main/signup/BusinessSignup';
import SignupDetail from './src/screens/Main/signup/SignupDetail';
import ScopeDetail from './src/screens/Main/signup/ScopeDetail';
import Home from './src/screens/Main/home/Home';
import Profile from './src/screens/Main/profile/Profile';
import Notification from './src/screens/Main/notification/Notification';
import TrackPurchase from './src/screens/Main/purchase/TrackPurchase';
import Message from './src/screens/Main/message/Message';
import MessageChat from './src/screens/Main/message/MessageChat';
import FaslanceDetail from './src/screens/Main/faslance/FaslanceDetail';
import FaslanceCreate from './src/screens/Main/faslance/FaslanceCreate';
import FaslanceTips from './src/screens/Main/faslance/FaslanceTips';
import FaslanceTipPost from './src/screens/Main/faslance/FaslanceTipPost';
import Setting from './src/screens/Main/setting/Setting';
import Help from './src/screens/Main/setting/Help';
import Privacy from './src/screens/Main/setting/Privacy';
import Notifications from './src/screens/Main/setting/Notifications';
import AddAccount from './src/screens/Main/setting/AddAccount';
import WardrobePost from './src/screens/Main/home/WardrobePost';
import WorldPost from './src/screens/Main/world/WorldPost';
import FolderPost from './src/screens/Main/home/FolderPost';
import MediaPost from './src/screens/Main/home/MediaPost';
import MediaItemPost from './src/screens/Main/home/MediaItemPost';
import FolderTextPost from './src/screens/Main/home/FolderTextPost';
import ProfileEdit from './src/screens/Main/profile/ProfileEdit';
import Question from './src/screens/Main/world/Question';
import QuestionItem from './src/screens/Main/world/QuestionItem';

pushNotifications.configure();

const MainNavigator = createStackNavigator(
  {
    Welcome: { screen: Welcome, navigationOptions: { headerShown: false, animationEnabled: false } },
    Login: { screen: Login, navigationOptions: { headerShown: false, animationEnabled: false } },
    Signup: { screen: Signup, navigationOptions: { headerShown: false, animationEnabled: false } },
    PersonalSignup: { screen: PersonalSignup, navigationOptions: { headerShown: false, animationEnabled: false } },
    BusinessSignup: { screen: BusinessSignup, navigationOptions: { headerShown: false, animationEnabled: false } },
    SignupDetail: { screen: SignupDetail, navigationOptions: { headerShown: false, animationEnabled: false } },
    ScopeDetail: { screen: ScopeDetail, navigationOptions: { headerShown: false, animationEnabled: false } },
    Home: { screen: Home, navigationOptions: { headerShown: false, animationEnabled: false } },
    Profile: { screen: Profile, navigationOptions: { headerShown: false, animationEnabled: false } },
    Notification: { screen: Notification, navigationOptions: { headerShown: false, animationEnabled: false } },
    TrackPurchase: { screen: TrackPurchase, navigationOptions: { headerShown: false, animationEnabled: false } },
    Message: { screen: Message, navigationOptions: { headerShown: false, animationEnabled: false } },
    MessageChat: { screen: MessageChat, navigationOptions: { headerShown: false, animationEnabled: false } },
    FaslanceDetail: { screen: FaslanceDetail, navigationOptions: { headerShown: false, animationEnabled: false } },
    FaslanceCreate: { screen: FaslanceCreate, navigationOptions: { headerShown: false, animationEnabled: false } },
    Setting: { screen: Setting, navigationOptions: { headerShown: false, animationEnabled: false } },
    Help: { screen: Help, navigationOptions: { headerShown: false, animationEnabled: false } },
    Privacy: { screen: Privacy, navigationOptions: { headerShown: false, animationEnabled: false } },
    Notifications: { screen: Notifications, navigationOptions: { headerShown: false, animationEnabled: false } },
    AddAccount: { screen: AddAccount, navigationOptions: { headerShown: false, animationEnabled: false } },
    WardrobePost: { screen: WardrobePost, navigationOptions: { headerShown: false, animationEnabled: false } },
    WorldPost: { screen: WorldPost, navigationOptions: { headerShown: false, animationEnabled: false } },
    FaslanceTips: { screen: FaslanceTips, navigationOptions: { headerShown: false, animationEnabled: false } },
    FaslanceTipPost: { screen: FaslanceTipPost, navigationOptions: { headerShown: false, animationEnabled: false } },
    FolderPost: { screen: FolderPost, navigationOptions: { headerShown: false, animationEnabled: false } },
    MediaPost: { screen: MediaPost, navigationOptions: { headerShown: false, animationEnabled: false } },
    MediaItemPost: { screen: MediaItemPost, navigationOptions: { headerShown: false, animationEnabled: false } },
    FolderTextPost: { screen: FolderTextPost, navigationOptions: { headerShown: false, animationEnabled: false } },
    ProfileEdit: { screen: ProfileEdit, navigationOptions: { headerShown: false, animationEnabled: false } },
    Question: { screen: Question, navigationOptions: { headerShown: false, animationEnabled: false } },
    QuestionItem: { screen: QuestionItem, navigationOptions: { headerShown: false, animationEnabled: false } },
  } 
)

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>      
    );
  }
};

