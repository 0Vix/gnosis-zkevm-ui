import { Drawer, Grid } from '@mui/material'
import type { SafeTransaction } from '@safe-global/safe-core-sdk-types'
import DecodedTx from '../tx/DecodedTx'

const ComponentLibrary = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Drawer
          variant="permanent"
          anchor="left"
          open
          sx={{
            width: '240px',
            '& .MuiDrawer-paper': { width: '240px', boxSizing: 'border-box', pt: 7, pl: 3 },
          }}
        >
          <h2>Components</h2>
        </Drawer>
      </Grid>

      <Grid item xs>
        <h3>Native token</h3>

        <DecodedTx
          tx={
            {
              data: {
                to: '0x3430d04E42a722c5Ae52C5Bffbf1F230C2677600',
                value: '1000000',
                data: '0x',
                operation: 0,
                baseGas: 0,
                gasPrice: 0,
                gasToken: '0x0000000000000000000000000000000000000000',
                refundReceiver: '0x0000000000000000000000000000000000000000',
                nonce: 58,
                safeTxGas: 0,
              },
            } as SafeTransaction
          }
        />

        <h3>ERC20</h3>

        <DecodedTx
          tx={
            {
              data: {
                to: '0x3430d04E42a722c5Ae52C5Bffbf1F230C2677600',
                value: '0',
                data: '0xa9059cbb000000000000000000000000474e5ded6b5d078163bfb8f6dba355c3aa5478c80000000000000000000000000000000000000000000000008ac7230489e80000',
                operation: 0,
                baseGas: 0,
                gasPrice: 0,
                gasToken: '0x0000000000000000000000000000000000000000',
                refundReceiver: '0x0000000000000000000000000000000000000000',
                nonce: 58,
                safeTxGas: 0,
              },
            } as SafeTransaction
          }
        />

        <h3>Multi-send</h3>

        <DecodedTx
          tx={
            {
              data: {
                to: '0x40A2aCCbd92BCA938b02010E17A5b8929b49130D',
                value: '0',
                data: '0x8d80ff0a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000017200317a8fe0f1c7102e7674ab231441e485c64c178a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006442842e0e000000000000000000000000c8b4da63f0b4413e4c8815143d28a642f6bd2309000000000000000000000000474e5ded6b5d078163bfb8f6dba355c3aa5478c80000000000000000000000000000000000000000000000000000000000075be60057f1887a8bf19b14fc0df6fd9b2acc9af147ea850000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006442842e0e000000000000000000000000c8b4da63f0b4413e4c8815143d28a642f6bd2309000000000000000000000000474e5ded6b5d078163bfb8f6dba355c3aa5478c81fc6ee99304bff67410b0c26bb11c8fa36bf39e7de082f8e437231e89ed069dc0000000000000000000000000000',
                operation: 1,
                baseGas: 0,
                gasPrice: 0,
                gasToken: '0x0000000000000000000000000000000000000000',
                refundReceiver: '0x0000000000000000000000000000000000000000',
                nonce: 58,
                safeTxGas: 0,
              },
            } as SafeTransaction
          }
        />
      </Grid>
    </Grid>
  )
}

export default ComponentLibrary
