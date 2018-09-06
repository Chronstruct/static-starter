import { bind } from 'decko'
import { inject, observer } from 'mobx-react'
import Link from 'react-router/lib/Link'
import React from 'react'
// import { css } from 'linaria'
import CenteredOverlay from './_/CenteredOverlay'
import FullOverlay from './_/FullOverlay'

const COLOR = 'red'
const t = true

/*
const col = css`
  name: COL;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  align-items: stretch;
`

const flex = css`
  display: flex;
  position: relative;
  flex-shrink: 0;
  align-items: stretch;
`

const row = css`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  align-items: stretch;
`

const center = css`
  align-items: center;
  justify-content: center;
`

const view = css`
  height: 200px;
  width: 400px;
  backgroundColor: red;
`

const view_UPDATED = css`
  composes: ${view};
  backgroundColor: green;
`
*/

@inject('AppOverlay')
@observer
export default class Home extends React.Component {
  state = {
    isUpdated: false,
  }

  @bind handleOpenFadeOverlay() {
    this.props.AppOverlay.show(FullOverlay)
  }

  @bind handleOpenModal() {
    this.props.AppOverlay.show(CenteredOverlay, {
      opacityColor: 'white',
      opacity: 0.5,
    })
  }

  @bind handleOpenModalDark() {
    this.props.AppOverlay.showModal(CenteredOverlay, {
      opacityColor: '#111',
      opacity: 0.7,
    })
  }

  @bind handleCloseModal() {
    this.props.AppOverlay.hide()
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isUpdated: true })
    }, 400)
  }

  render() {
    const grow = 1
    const another = 0;
    const blue = 'blue'
    const PHONE = '@media screen and (min-width: 600px)'
    const height = 30

    return (
      <col
        center
        grow={grow}
        // flex-grow: 1;
      // flex-grow: 1;
      // flex-grow: ;
        // css={`
        //   display: flex;
        //   flex-direction: column;
        //   position: relative;
        //   flex-shrink: ${another};
        //   align-items: center;
        //   justify-content: center;
        //   ${true ? 'flex-grow: 1' : ''}
        // `}
      >

        {/* <event_ */}
        {/*   onClick={this.handleClick} */}
        {/*   hitSlop={20} */}
        {/* > */}
        {/*   <style_ */}
        {/*     backgroundColor={['purple', 'pink']} */}
        {/*   > */}
        {/*     <view */}
        {/*       as='aside' */}
        {/*       width={200} */}
        {/*       height={['40px', '80px']} */}
        {/*       breakpoints={[200, 800]} */}
        {/*     /> */}
        {/*   </style_> */}
        {/* </event_> */}
        {/*  */}
        {/* <view */}
        {/*   as='aside' */}
        {/*   width={200} */}
        {/*   height={['40px', '80px']} */}
        {/*   backgroundColor={['purple', 'pink']} */}
        {/*   breakpoints={[200, 800]} */}
        {/*   onClick={this.handleClick} */}
        {/*   hitSlop={20} */}
        {/* /> */}
        {/*  */}
        {/* <view */}
        {/*   as='aside' */}
        {/*   width={200} */}
        {/*   height='40px' */}
        {/*   onClick={this.handleClick} */}
        {/*   style={` */}
        {/*     background-color: purple; */}
        {/*   `} */}
        {/* /> */}
        {/*  */}
        {/*  */}
        {/* <style_ */}
        {/*   backgroundColor='purple' */}
        {/* > */}
        {/*   <view */}
        {/*     as='aside' */}
        {/*     width={200} */}
        {/*     height='40px' */}
        {/*     // padding={20} */}
        {/*     css={` */}
        {/*       background-color: purple; */}
        {/*     `} */}
        {/*   /> */}
        {/* </style_> */}
        {/*  */}
        {/* <view */}
        {/*   as='aside' */}
        {/*   width={200} */}
        {/*   height={['40px', '80px']} */}
        {/*   breakpoints={[200, 800]} */}
        {/*   style={` */}
        {/*     background-color: purple; */}
        {/*   `} */}
        {/* /> */}

        <view
          as='nav'
          width={300}
          height={{
            '': 30,
            600: 400,
          }}
          margin={20}
          style={{
            backgroundColor: {
              '': 'purple',
              600: 'blue',
              ':hover': 'green',
            }
          }}
        />

        <view
          height={200}
          width={400}
          // backgroundColor: var(--main-bg-color);
          style={{
            backgroundColor: t ? 'yellow' : 'blue'
          }}
          // css={`background-color: ${this.state.isUpdated ? 'yellow' : 'blue'};`}
            // css={`background-color: ${COLOR}`}
        />

        <space size={40} />

        <row
          height={200}
          width={400}
        >
          <view
            grow
            style={{
              backgroundColor: 'red'
            }}
          />
          <view
            grow
            style={{
              backgroundColor: 'green'
            }}
          />
          <space size={20} />
          <view
            grow
            style={{
              backgroundColor: blue
            }}
          />
        </row>

        <space size={40} />

        <view
          // direction={this.state.isUpdated ? 'column' : 'row'}
          height={200}
          width={400}
        >
          <view
            grow
            style={{
              backgroundColor: 'red'
            }}
          />
          <view
            grow
            style={{
              backgroundColor: 'green'
            }}
          />
          <view
            grow
            style={{
              backgroundColor: 'blue'
            }}
          />
        </view>

        <text size={20}>
          Home
        </text>

        <Link to='other'>Other</Link>

        <view
          as="button"
          padding={16}
          onClick={this.handleOpenFadeOverlay}
          //_events={{
            //onClick: this.handleOpenFadeOverlay
          //}}
          //_style={{border: '1px solid #111'}}
          style={{border: '1px solid #111'}}
        >
          <text size='16px'>
            Open Fade Overlay
          </text>
        </view>

        <view
          as="button"
          padding={16}
          onClick={this.handleOpenModal}
          style={{border: '1px solid #111'}}
        >
        <text size={16} uppercase >
          Open Overlay Light Outer
        </text>
        </view>

        <view
          as="button"
          padding={16}
          onClick={this.handleOpenModalDark}
          style={{border: '1px solid #111'}}
        >
          <text size={16} bold>
          Open Modal Dark Outer
        </text>
        </view>
             </col>
    )
  }
}
