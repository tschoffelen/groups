import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const icons = {
  'back': require('@assets/icons/back.png'),
  'add': require('@assets/icons/add.png'),
  'profile': require('@assets/icons/profile.png'),
  'member': require('@assets/icons/member.png')
}

export default class HeaderButton extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.number
  }

  static defaultProps = {
    color: '#919190',
    size: 28
  }

  renderIcon (icon, size, color) {
    if (icon in icons) {
      return (
        <Image
          source={icons[icon]}
          style={[styles.icon, { tintColor: color, height: size, width: size }]}/>
      )
    }

    return (
      <Feather
        name={icon}
        size={size}
        color={color}/>
    )
  }

  render () {
    const { style, children, icon, color, size, onPress } = this.props

    return (
      <TouchableOpacity {...this.props} onPress={onPress} style={[styles.container, style]}>

        {icon ? this.renderIcon(icon, size, color) : children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: -6,
    padding: 6
  }
})
