import { types } from '../actions/types'

export const initialState = {
  version: '0.0.1'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.APP_START:
      return state

    case types.APP_SET_VERSION:
      return Object.assign(state, { version: action.payload })

    default:
      return state
  }
}
