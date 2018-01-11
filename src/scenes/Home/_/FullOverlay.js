import React from 'react'
import { css } from 'linaria'

export default class FullOverlay extends React.PureComponent {
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
            top={'0px'}
            right={'0px'}
            bottom={'0px'}
            left={'0px'}
            style={{
              opacity: this.state.isVisible ? 1 : 0,
            }}
            css={`
              transition: opacity 1000ms ease-in-out;
              background-color: red;
            `}
          >
            <text>Oh HAI!</text>
          </view>
    )
  }
}
