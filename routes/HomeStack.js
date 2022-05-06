import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';

const screens = {
  Home: {
    screen: WelcomeScreen
  },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);