import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultScreen from './src/screens/ResultScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultScreen
},
{
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: 'Search'
  } 
});

export default createAppContainer(navigator);