import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

import HeaderButton from './HeaderButton'

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    back: PropTypes.bool,
    children: PropTypes.any
  }

  render () {
    const { title, back, children } = this.props

    return (
      <View {...this.props} style={styles.container}>
        <SafeAreaView>
          <View style={styles.content}>
            <View style={styles.inner}>
              <View>
                {back ? (
                  <HeaderButton color='#000' icon='back'/>
                ) : null}
              </View>
              <View>
                {children}
              </View>
            </View>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.title}>
              {title}
            </Text>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 20,
    paddingBottom: 32
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  title: {
    color: '#000',
    textAlign: 'left',
    fontWeight: '700',
    letterSpacing: 0.6,
    lineHeight: 32,
    fontSize: 24
  }
})
