/** @jsx jsx */
import PropTypes from 'prop-types'
import { Styled, jsx } from 'theme-ui'
import { Grid } from '@theme-ui/components'
import QRCodeReact from 'qrcode.react'

import Divider from '../Divider'

const QRCode = ({ size, uri = '' }) => {
  return (
    <Grid columns={1} p={3}>
      <Styled.h2>Wallet Connect...</Styled.h2>
      <Styled.p>
        Launch a compatible wallet app on your mobile or tablet and scan the QR
        icon.
      </Styled.p>
      <a
        href="https://walletconnect.org/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-block',
          textDecoration: 'none',
          color: 'secondary',
          fontFamily: 'heading',
        }}
      >
        Help with signing in{' '}
        <img src="/arrow.svg" alt="arrow" sx={{ ml: 1, fill: 'secondary' }} />
      </a>
      <Divider mt={0} mb={6} />
      <QRCodeReact
        size={size}
        value={uri}
        bgColor={'white'}
        style={{ margin: '0 auto' }}
      />
    </Grid>
  )
}

QRCode.propTypes = {
  size: PropTypes.number,
  uri: PropTypes.string,
}

export default QRCode
