import { createStackNavigator } from 'react-navigation'

import FeedScreen from './FeedScreen'
import defaultNavigationOptions from '@utils/defaultNavigationOptions'

export const Feed = createStackNavigator({
  FeedScreen
}, {
  headerLayoutPreset: 'left',
  defaultNavigationOptions
})
