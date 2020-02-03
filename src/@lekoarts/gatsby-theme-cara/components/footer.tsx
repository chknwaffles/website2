/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx } from "theme-ui"

const Footer = () => {
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = (e: any) => {
        setColorMode(isDark ? `light` : `dark`)
    }

    return (
        <ThemeFooter>
            <button
                sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
                onClick={toggleColorMode}
                type="button"
                aria-label="Toggle dark mode"
            >
            {isDark ? `Light` : `Dark`}
            </button>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br />
            <Flex
                sx={{
                justifyContent: `center`,
                alignItems: `center`,
                mt: 3,
                color: `text`,
                fontWeight: `semibold`,
                a: { color: `text` },
                }}
            >
        {` `}
        <Styled.a
          aria-label="Link to the theme's original creator"
          sx={{ ml: 2 }}
          href="https://www.lekoarts.de/en"
        >
          Theme
        </Styled.a>
        <div sx={{ mx: 1 }}>by LekoArts and editted by Won Kim</div>
      </Flex>
    </ThemeFooter>
  )
}

export default Footer