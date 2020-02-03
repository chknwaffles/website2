import baseTheme from '@lekoarts/gatsby-theme-cara/src/gatsby-plugin-theme-ui/index'

export default {
    ...baseTheme,
    styles: {
        ...baseTheme.styles,
        Footer: {
            ...baseTheme.styles.Footer,
            px: [1, 3],
            py: [5, 6]
        }
    }
}