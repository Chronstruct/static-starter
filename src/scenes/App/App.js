// import 'glamor-reset'
import { css } from 'linaria'

import { Provider } from 'mobx-react'
import React from 'react'
import mobx from 'mobx'
// import { injectGlobal } from 'emotion'

import AppOverlay from 'stores/AppOverlay'
import Overlay from './_/Overlay'
import OpacityOverlay from './_/OpacityOverlay'

// -- MobX --
// throw an exception on any attempt to modify MobX state outside an action
mobx.useStrict(true)

// log all mobx actions when in development mode
if (process.env.NODE_ENV !== 'production') {
  mobx.spy(ev => {
    if (ev.type === 'action') {
      console.log(ev.name)
    }
  })
}

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

const stores = {
  AppOverlay: new AppOverlay(),
}
//
// injectGlobal`
//   :root {
//     --main-bg-color: brown;
//   }
// `

export class AppBar extends React.Component {
  render() {
    return (
      <row alignHorizontal='left'>
        <img src='http://www.fillmurray.com/64/64' />
      </row>
    )
  }
}

export class TabBar extends React.Component {
  render() {
    return (
      <row alignHorizontal='right'>
        <text>One</text>
        <text>Two</text>
        <text>Three</text>
      </row>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <col
            fit
            start

        >
          {/* <AppBar /> */}
          {/* <TabBar /> */}

          {this.props.children}

          <OpacityOverlay />
          <Overlay />

        </col>
      </Provider>
    )
  }
}

