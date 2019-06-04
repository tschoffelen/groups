import React, { Component } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { setCustomText } from 'react-native-global-props'

import Loading from './components/common/Loading'

import { Feed } from './screens/group'

import createStore from './store'
import defaultNavigationOptions from './utils/defaultNavigationOptions'

const { store, persistor } = createStore()

setCustomText({
  style: {
    fontFamily: 'Inter'
  }
})

class RootComponent extends Component {
  render () {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
      </View>
    )
  }
}

const Navigation = createAppContainer(createStackNavigator({
  main: createBottomTabNavigator({ Feed }, {
    defaultNavigationOptions,
    tabBarOptions: {
      activeTintColor: '#f85012',
      inactiveTintColor: '#000000',
      showLabel: false
    },
    navigationOptions: {
      header: null
    }
  }),
  RootComponent
}, {
  defaultNavigationOptions,
  mode: 'modal'
}))

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading/>} persistor={persistor}>
      <Navigation/>
    </PersistGate>
  </Provider>
)

export default App
