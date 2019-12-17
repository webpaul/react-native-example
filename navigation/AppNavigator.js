import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    OtherScreen: { screen: OtherScreen },
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;