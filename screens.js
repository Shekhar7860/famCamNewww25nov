import {Navigation} from 'react-native-navigation';
import home from './Screens/home';
import * as React from 'react';
import register from './Screens/register';
import otpInput from './Screens/otpInput';
import login from './Screens/login';
import forgotPassword from './Screens/forgotPassword';
import famcamHome from './Screens/famcamHome';
import orders from './Screens/orders';
import profile from './Screens/profile';
import talentInfo from './Screens/talentInfo';
import shoutout from './Screens/shoutout';
import profileSetup from './Screens/profileSetup';
import editProfile from './Screens/editProfile';
import termsAndConditions from './Screens/termsAndConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import contact from './Screens/contact';
import PlayVideo from './Screens/PlayVideo';
import Language from './Screens/Language';
import Suggestion from './Screens/Suggestion';
import AfterPayment from './Screens/AfterPayment';
import PaymentInfo from './Screens/PaymentInfo';
import paymentWeb from './Screens/paymentWeb';
import ChangePassword from './Screens/ChangePassword';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
const store = configureStore();

const createApp = (Component, ...props) => {
  return class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Component/>
        </Provider>
      );
    }
  }
}

export function registerScreens(store, Provider) {
  Navigation.registerComponent('home', () => createApp(home));
  Navigation.registerComponent('register', () => createApp(register));
  Navigation.registerComponent('otpInput', () => createApp(otpInput));
  Navigation.registerComponent('login', () => createApp(login));
  Navigation.registerComponent('forgotPassword', () => createApp(forgotPassword));
  Navigation.registerComponent('famcamHome', () => createApp(famcamHome));
  Navigation.registerComponent('orders', () => createApp(orders));
  Navigation.registerComponent('profile', () => createApp(profile));
  Navigation.registerComponent('talentInfo', () => createApp(talentInfo));
  Navigation.registerComponent('shoutout', () => createApp(shoutout));
  Navigation.registerComponent('profileSetup', () => createApp(profileSetup));
  Navigation.registerComponent('editProfile', () => createApp(editProfile));
   Navigation.registerComponent('termsAndConditions', () => createApp(termsAndConditions));
   Navigation.registerComponent('PrivacyPolicy', () => createApp(PrivacyPolicy));
   Navigation.registerComponent('contact', () => createApp(contact));
   Navigation.registerComponent('PlayVideo', () => createApp(PlayVideo));
  Navigation.registerComponent('Language', () => createApp(Language));
   Navigation.registerComponent('Suggestion', () => createApp(Suggestion));
   Navigation.registerComponent('AfterPayment', () => createApp(AfterPayment));
   Navigation.registerComponent('PaymentInfo', () => createApp(paymentInfo));
   Navigation.registerComponent('paymentWeb', () => createApp(paymentWeb));
   Navigation.registerComponent('ChangePassword', () => createApp(ChangePassword));
}
