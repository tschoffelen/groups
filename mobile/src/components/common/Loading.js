import React from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default class Loading extends React.Component {
  static propTypes = {
    style: PropTypes.any
  }

  render () {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        <ActivityIndicator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
