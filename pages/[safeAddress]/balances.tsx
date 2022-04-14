import type { NextPage } from 'next'

import { selectSafeInfo } from 'store/safeInfoSlice'
import useSafeAddress from 'services/useSafeAddress'
import { useAppSelector } from 'store'
import { selectChainById } from 'store/chainsSlice'
import useAssets from 'services/useAssets'

const Balances: NextPage = () => {
  const { chainId } = useSafeAddress()
  const safeInfo = useAppSelector(selectSafeInfo)
  const chainConfig = useAppSelector((state) => selectChainById(state, chainId))
  const { balances, loading } = useAssets()

  return (
    <main>
      <h1>Hello Safe on {chainConfig?.chainName}</h1>
      Owners: {safeInfo.owners.map((item) => item.value).join(', ')}
      <h2>Balances {loading ? '(loading...)' : ''}</h2>
      {balances ? <pre>{JSON.stringify(balances, null, 2)}</pre> : null}
    </main>
  )
}

export default Balances