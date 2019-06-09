import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

export default class Attachment extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2e3e4',
    padding: 8,
    marginTop: 18,
    marginRight: -18
  }
})
