import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    html: {
      fontFamily: `'Noto Sans JP', sans-serif`,
      font: `100%/1.75 'Noto Sans JP', sans-serif`,
    },
    body: {
      fontFamily: `'Noto Sans JP', sans-serif`,
    },
    h1: {
      fontFamily: `'Noto Sans JP', sans-serif`,
    },
    h2: {
      fontFamily: `'Noto Sans JP', sans-serif`,
    },
    h3: {
      fontFamily: `'Noto Sans JP', sans-serif`,
    },
    h4: {
      fontFamily: `'Noto Sans JP', sans-serif`,
    },
    h5: {
      fontFamily: `'Noto Sans JP', sans-serif`,
    },
    h6: {
      fontFamily: `'Noto Sans JP', sans-serif`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
