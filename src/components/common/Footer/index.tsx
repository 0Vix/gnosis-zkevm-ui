import type { SyntheticEvent, ReactElement } from 'react'
import { Typography } from '@mui/material'
//import Link from 'next/link'
import { useRouter } from 'next/router'
import css from './styles.module.css'
import { useAppDispatch } from '@/store'
import { openCookieBanner } from '@/store/popupSlice'
import { AppRoutes } from '@/config/routes'
import packageJson from '../../../../package.json'
//import AppstoreButton from '../AppStoreButton'
import ExternalLink from '../ExternalLink'
//import MUILink from '@mui/material/Link'

const footerPages = [
  AppRoutes.welcome,
  AppRoutes.settings.index,
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.cookie,
  AppRoutes.terms,
  AppRoutes.licenses,
]

const Footer = (): ReactElement | null => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  const onCookieClick = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(openCookieBanner({}))
  }

  return (
    <footer className={css.container}>
      <ul>
        <li>
          <Typography variant="caption">&copy;{new Date().getFullYear()} Polygon Technology</Typography>
        </li>
        <li>
          <ExternalLink noIcon href="#">
            Privacy Policy
          </ExternalLink>
        </li>
        <li>
          <ExternalLink noIcon href="#">
            Terms of use
          </ExternalLink>
        </li>
        <li>
          <ExternalLink noIcon href="https://polygon.technology/polygon-zkevm">
            Learn more about zkEVM
          </ExternalLink>
        </li>
        <li>
          <ExternalLink noIcon href="https://wallet.polygon.technology/zkEVM-Bridge/bridge">
            zkEVM Bridge
          </ExternalLink>
        </li>
        <li>
          <ExternalLink noIcon href="https://github.com/maticnetwork/gnosis-zkevm-ui">
            Github
          </ExternalLink>
        </li>
        <li>
          <ExternalLink noIcon href={`${packageJson.homepage}/releases/tag/v${packageJson.version}`}>
            v{packageJson.version}
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
