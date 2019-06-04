import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, Text, Platform } from 'react-native'

export default class Avatar extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      title: PropTypes.string,
      avatar: PropTypes.string
    }),
    size: PropTypes.number,
    style: PropTypes.any
  }

  static defaultProps = {
    size: 44
  }

  getInitials () {
    let name = (this.props.user.title || '').split(' ')
    let initials = name[0].substring(0, 1)

    if (name.length > 1) {
      initials += name[1].substring(0, 1)
    }

    return initials.toUpperCase()
  }

  render () {
    return (
      <View {...this.props} style={[styles.container, {
        width: this.props.size,
        height: this.props.size
      }, this.props.style]}>
        {this.props.user.avatar ? (
          <Image style={styles.image} source={{ cache: 'force-cache', uri: this.props.user.avatar }}/>
        ) : null}
        {!this.props.user.avatar && this.props.user.title ? (
          <Text
            style={[styles.initials, {
              fontSize: this.props.size / 2.2,
              letterSpacing: this.props.size * 0.03,
              lineHeight: this.props.size / 2 + 8
            }]}
            numberOfLines={1}
            ellipsizeMode={Platform.select({ ios: 'clip', android: 'tail' })}>
            {this.getInitials()}</Text>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  initials: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
    textAlignVertical: 'center',
    includeFontPadding: false,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#e2e3e4',
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#e2e3e4'
  }
})
