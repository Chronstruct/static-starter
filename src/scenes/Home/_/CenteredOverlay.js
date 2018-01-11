import React from 'react'
import { css } from 'linaria'

export default class CenteredOverlay extends React.PureComponent {
  state = {
    isVisible: false,
  }

  componentDidEnter() {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        this.setState({ isVisible: true })
      })
    })
  }

  componentWillLeave(cb: Function) {
    this.node.addEventListener(
      'transitionend',
      () => {
        cb()
      },
      { once: true },
    )

    this.setState({ isVisible: false })
  }

  setRef = (node : HTMLElement) => {
    this.node = node
  }

  render() {
    return (
          <view
            ref={this.setRef}
            onClick={this.props.onClose}
            zIndex={2}
            position='fixed'
            top={'50px'}
            right={'50px'}
            bottom={'50px'}
            left={'50px'}
            style={{
              transform: this.state.isVisible ? 'translateY(0)' : 'translateY(100vh)',
            }}
            css={`
              transition: transform 300ms ease-in-out;
              background-color: red;
            `}
          >
            <text>Oh HAI!</text>
          </view>
    )
  }
}
