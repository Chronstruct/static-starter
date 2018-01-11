import { bind } from 'decko'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { css } from 'linaria'

@inject('AppOverlay')
@observer
export default class OpacityOverlay extends React.Component {
  @bind handleClick() {
    if (this.props.AppOverlay.isModal === true) {
      this.props.AppOverlay.hide()
    }
  }

  render() {
    const {
      isVisible,
      opacity,
      backgroundColor,
    } = this.props.AppOverlay.opacityOverlay

    return (
      <view
        onClick={this.handleClick}
        zIndex={2}
        position='fixed'
        top={0}
        right={0}
        bottom={0}
        left={0}
        style={{
          backgroundColor: backgroundColor,
          opacity: isVisible ? opacity : 0,
          overflowY: isVisible && 'hidden',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        css={`
          transition: opacity 200ms ease-out;
        `}
      />
    )
  }
}

