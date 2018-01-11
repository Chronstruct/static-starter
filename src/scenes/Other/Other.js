// @flow
// Imports {{{

import Link from 'react-router/lib/Link'
import React from 'react'
import { css } from 'linaria'


// }}}

export default class Other extends React.Component {
  render() {
    return (
      <col center>
        <text>Other</text>

        <space size='40px' />

        <Link to='/'>Home</Link>

        <space size='40px' />


        <img src='http://www.fillmurray.com/64/64' />
      </col>
    )
  }
}

