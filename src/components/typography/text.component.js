import styled from 'styled-components'
import { Text as RNText } from 'react-native'

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`
const bodyWhite = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.ui.quaternary}
`

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`

const error = (theme) => `
    font-size: ${theme.fontSizes.caption};
    color: ${theme.colors.text.error};
`

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
`

const label = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
    font-family: ${theme.fonts.heading};
`

const title = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`
const titleWhite = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.inverse}
`
const titleBrand = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.brand.primary}
`

const variants = {
  body,
  bodyWhite,
  caption,
  error,
  hint,
  label,
  title,
  titleBrand,
  titleWhite,
}

export const Text = styled(RNText)`
  ${({ theme, variant }) => variants[variant](theme)}
  ${({ theme }) => defaultTextStyles(theme)}
`
Text.defaultProps = {
  variant: 'body',
}
