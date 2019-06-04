import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import Avatar from '@components/feed/Avatar'
import moment from 'moment'

export default class FeedItem extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }

  render () {
    const { data } = this.props

    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        <Avatar user={data.user}/>
        <View style={styles.content}>
          <View style={styles.headline}>
            <Text style={styles.name} numberOfLines={1}>{data.user.title}</Text>
            <Text style={styles.time} numberOfLines={1}>{moment(data.createdAt).fromNow(true)}</Text>
          </View>
          <Text style={styles.body}>{data.description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
    paddingTop: 0,
    flexDirection: 'row'
  },
  content: {
    flex: 1,
    marginLeft: 18,
    marginTop: -5
  },
  body: {
    color: '#989897',
    fontSize: 16,
    lineHeight: 22
  },
  headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4
  },
  name: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    lineHeight: 22
  },
  time: {
    marginLeft: 10,
    color: '#d1d2d3',
    fontSize: 16,
    lineHeight: 22
  }
})
