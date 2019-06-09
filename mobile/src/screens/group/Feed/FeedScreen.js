import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

import { Header, HeaderButton } from '@components/header'
import FeedItem from '@components/feed/FeedItem'

export default class FeedScreen extends Component {
  static navigationOptions = {
    title: 'Timeline',
    header: (
      <Header title='Timeline' back>
        <HeaderButton icon='add' onPress={() => {}}/>
      </Header>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <FeedItem
          data={{
            id: '9e334d07-49d2-49bd-84a0-44476a1192df',
            user: {
              id: 'fe32defe-3a1b-47d6-aaf8-929e29dfe3d6',
              title: 'Donald Webber',
              avatar: 'https://randomuser.me/api/portraits/men/82.jpg'
            },
            createdAt: '2019-06-04T13:28:29+00:00',
            description: 'For our Tuesday session, please read the information about the t-test ' +
              'from the website below and look at this stuff.',
            attachments: [{
              id: '98cf25e4-04dd-443e-bd9c-7c4ba328ecba',
              type: 'link',
              title: 'Two sample t-tests',
              description: 'Cardiff Maths Support will help you with finding out why',
              href: 'http://example.com/'
            }]
          }}/>
        <FeedItem
          data={{
            id: '9e334d07-49d2-49bd-84a0-44476a1192df',
            user: {
              id: 'fe32defe-3a1b-47d6-aaf8-929e29dfe3d6',
              title: 'Lars Manhatten',
              avatar: 'https://randomuser.me/api/portraits/men/49.jpg'
            },
            createdAt: '2019-06-03T13:28:29+00:00',
            description: 'This is the image of the flowers we were talking about in class today.',
            attachments: [{
              id: '23784da0-a443-417e-ac53-c4d8522cb333',
              type: 'image',
              href: 'https://lowcdn.com/2x/43b/9433b6d727bf-00b21019b3/overzicht-onderwijs.jpg'
            }]
          }}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
