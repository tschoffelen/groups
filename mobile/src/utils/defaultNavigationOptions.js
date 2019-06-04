import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

export default ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state
    let iconName = 'info'
    switch (routeName) {
      case 'Map':
        iconName = 'map'
        break
      case 'List':
        iconName = 'grid'
        break
      case 'Events':
        iconName = 'calendar'
        break
      case 'News':
        iconName = 'inbox'
        break
      case 'Routes':
        iconName = 'navigation'
        break
    }

    return <Feather name={iconName} size={22} color={tintColor}/>
  }
})
