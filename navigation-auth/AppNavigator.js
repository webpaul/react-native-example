import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';
import LoginScreen from './LoginScreen';

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const LoginStack = createStackNavigator({ SignIn: LoginScreen });

export default createAppContainer(createSwitchNavigator(
    {
        Login: LoginStack,
        App: AppStack,
    },
    {
      initialRouteName: 'Login',
    }
  ));
