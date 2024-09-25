import withMT from '@material-tailwind/react/utils/withMt';
import combinedTokens from './combinedTokens.json' assert { type: 'json' };


export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(0deg, rgba(21, 28, 36, 0.60) 0%, rgba(21, 28, 36, 0.60) 100%), url("/images/Hero.png")',
      },
      fontFamily: {
        ebgaramond: ['"EB Garamond"', 'serif'], // Add EB Garamond font
        inter: ['"Inter"', 'sans-serif'],
        "desktop-headings-display-large-bold": "var(--desktop-headings-display-large-bold-font-family)",
        "desktop-headings-display-large-medium": "var(--desktop-headings-display-large-medium-font-family)",
        "desktop-headings-display-large-regular": "var(--desktop-headings-display-large-regular-font-family)",
        "desktop-headings-display-large-semi-bold": "var(--desktop-headings-display-large-semi-bold-font-family)",
        "desktop-headings-display-small-bold": "var(--desktop-headings-display-small-bold-font-family)",
        "desktop-headings-display-small-medium": "var(--desktop-headings-display-small-medium-font-family)",
        "desktop-headings-display-small-regular": "var(--desktop-headings-display-small-regular-font-family)",
        "desktop-headings-display-small-semi-bold": "var(--desktop-headings-display-small-semi-bold-font-family)",
        "desktop-headings-h1-bold": "var(--desktop-headings-h1-bold-font-family)",
        "desktop-headings-h1-medium": "var(--desktop-headings-h1-medium-font-family)",
        "desktop-headings-h1-regular": "var(--desktop-headings-h1-regular-font-family)",
        "desktop-headings-h1-semi-bold": "var(--desktop-headings-h1-semi-bold-font-family)",
        "desktop-headings-h2-bold": "var(--desktop-headings-h2-bold-font-family)",
        "desktop-headings-h2-medium": "var(--desktop-headings-h2-medium-font-family)",
        "desktop-headings-h2-regular": "var(--desktop-headings-h2-regular-font-family)",
        "desktop-headings-h2-semi-bold": "var(--desktop-headings-h2-semi-bold-font-family)",
        "desktop-headings-h3-bold": "var(--desktop-headings-h3-bold-font-family)",
        "desktop-headings-h3-medium": "var(--desktop-headings-h3-medium-font-family)",
        "desktop-headings-h3-regular": "var(--desktop-headings-h3-regular-font-family)",
        "desktop-headings-h3-semi-bold": "var(--desktop-headings-h3-semi-bold-font-family)",
        "desktop-headings-h4-bold": "var(--desktop-headings-h4-bold-font-family)",
        "desktop-headings-h4-medium": "var(--desktop-headings-h4-medium-font-family)",
        "desktop-headings-h4-regular": "var(--desktop-headings-h4-regular-font-family)",
        "desktop-headings-h4-semi-bold": "var(--desktop-headings-h4-semi-bold-font-family)",
        "desktop-headings-h5-bold": "var(--desktop-headings-h5-bold-font-family)",
        "desktop-headings-h5-medium": "var(--desktop-headings-h5-medium-font-family)",
        "desktop-headings-h5-regular": "var(--desktop-headings-h5-regular-font-family)",
        "desktop-headings-h5-semi-bold": "var(--desktop-headings-h5-semi-bold-font-family)",
        "desktop-headings-h6-bold": "var(--desktop-headings-h6-bold-font-family)",
        "desktop-headings-h6-medium": "var(--desktop-headings-h6-medium-font-family)",
        "desktop-headings-h6-regular": "var(--desktop-headings-h6-regular-font-family)",
        "desktop-headings-h6-semi-bold": "var(--desktop-headings-h6-semi-bold-font-family)",
        "mobile-headings-h1-bold": "var(--mobile-headings-h1-bold-font-family)",
        "mobile-headings-h1-medium": "var(--mobile-headings-h1-medium-font-family)",
        "mobile-headings-h1-regular": "var(--mobile-headings-h1-regular-font-family)",
        "mobile-headings-h1-semi-bold": "var(--mobile-headings-h1-semi-bold-font-family)",
        "mobile-headings-h2-bold": "var(--mobile-headings-h2-bold-font-family)",
        "mobile-headings-h2-medium": "var(--mobile-headings-h2-medium-font-family)",
        "mobile-headings-h2-regular": "var(--mobile-headings-h2-regular-font-family)",
        "mobile-headings-h2-semi-bold": "var(--mobile-headings-h2-semi-bold-font-family)",
        "mobile-headings-h3-bold": "var(--mobile-headings-h3-bold-font-family)",
        "mobile-headings-h3-medium": "var(--mobile-headings-h3-medium-font-family)",
        "mobile-headings-h3-regular": "var(--mobile-headings-h3-regular-font-family)",
        "mobile-headings-h3-semi-bold": "var(--mobile-headings-h3-semi-bold-font-family)",
        "mobile-headings-h4-bold": "var(--mobile-headings-h4-bold-font-family)",
        "mobile-headings-h4-medium": "var(--mobile-headings-h4-medium-font-family)",
        "mobile-headings-h4-regular": "var(--mobile-headings-h4-regular-font-family)",
        "mobile-headings-h4-semi-bold": "var(--mobile-headings-h4-semi-bold-font-family)",
        "mobile-headings-h5-bold": "var(--mobile-headings-h5-bold-font-family)",
        "mobile-headings-h5-medium": "var(--mobile-headings-h5-medium-font-family)",
        "mobile-headings-h5-regular": "var(--mobile-headings-h5-regular-font-family)",
        "mobile-headings-h5-semi-bold": "var(--mobile-headings-h5-semi-bold-font-family)",
        "mobile-headings-h6-bold": "var(--mobile-headings-h6-bold-font-family)",
        "mobile-headings-h6-medium": "var(--mobile-headings-h6-medium-font-family)",
        "mobile-headings-h6-regular": "var(--mobile-headings-h6-regular-font-family)",
        "mobile-headings-h6-semi-bold": "var(--mobile-headings-h6-semi-bold-font-family)",
        "overline-mobile": "var(--overline-mobile-font-family)",
        "overline-web": "var(--overline-web-font-family)",
        "paragraph-large-italic": "var(--paragraph-large-italic-font-family)",
        "paragraph-large-medium": "var(--paragraph-large-medium-font-family)",
        "paragraph-large-regular": "var(--paragraph-large-regular-font-family)",
        "paragraph-large-semi-bold": "var(--paragraph-large-semi-bold-font-family)",
        "paragraph-large-strikethrough": "var(--paragraph-large-strikethrough-font-family)",
        "paragraph-large-underlined": "var(--paragraph-large-underlined-font-family)",
        "paragraph-medium-italic": "var(--paragraph-medium-italic-font-family)",
        "paragraph-medium-medium": "var(--paragraph-medium-medium-font-family)",
        "paragraph-medium-regular": "var(--paragraph-medium-regular-font-family)",
        "paragraph-medium-semi-bold": "var(--paragraph-medium-semi-bold-font-family)",
        "paragraph-medium-strikethrough": "var(--paragraph-medium-strikethrough-font-family)",
        "paragraph-medium-underline": "var(--paragraph-medium-underline-font-family)",
        "paragraph-small-italic": "var(--paragraph-small-italic-font-family)",
        "paragraph-small-medium": "var(--paragraph-small-medium-font-family)",
        "paragraph-small-regular": "var(--paragraph-small-regular-font-family)",
        "paragraph-small-semi-bold": "var(--paragraph-small-semi-bold-font-family)",
        "paragraph-small-strikethrough": "var(--paragraph-small-strikethrough-font-family)",
        "paragraph-small-underline": "var(--paragraph-small-underline-font-family)",
        "paragraph-xsmall-italic": "var(--paragraph-xsmall-italic-font-family)",
        "paragraph-xsmall-medium": "var(--paragraph-xsmall-medium-font-family)",
        "paragraph-xsmall-regular": "var(--paragraph-xsmall-regular-font-family)",
        "paragraph-xsmall-semi-bold": "var(--paragraph-xsmall-semi-bold-font-family)",
        "paragraph-xsmall-strikethrough": "var(--paragraph-xsmall-strikethrough-font-family)",
        "paragraph-xsmall-underline": "var(--paragraph-xsmall-underline-font-family)", // Add Inter font
      },
      colors: {
        ...combinedTokens.colors,
        "neutral-900": "var(--neutral-900)",
        "primitive-destructive-300": "var(--primitive-destructive-300)",
        "primitive-destructive-400": "var(--primitive-destructive-400)",
        "primitive-destructive-900": "var(--primitive-destructive-900)",
        "primitive-gray-800": "var(--primitive-gray-800)",
        "primitive-information-100": "var(--primitive-information-100)",
        "primitive-information-300": "var(--primitive-information-300)",
        "primitive-information-400": "var(--primitive-information-400)",
        "primitive-information-500": "var(--primitive-information-500)",
        "primitive-primary-100": "var(--primitive-primary-100)",
        "primitive-primary-200": "var(--primitive-primary-200)",
        "primitive-primary-300": "var(--primitive-primary-300)",
        "primitive-primary-400": "var(--primitive-primary-400)",
        "primitive-primary-50": "var(--primitive-primary-50)",
        "primitive-primary-500": "var(--primitive-primary-500)",
        "primitive-primary-600": "var(--primitive-primary-600)",
        "primitive-primary-700": "var(--primitive-primary-700)",
        "primitive-primary-800": "var(--primitive-primary-800)",
        "primitive-primary-900": "var(--primitive-primary-900)",
        "primitive-shades-black": "var(--primitive-shades-black)",
        "primitive-success-100": "var(--primitive-success-100)",
        "primitive-success-300": "var(--primitive-success-300)",
        "primitive-success-400": "var(--primitive-success-400)",
        "primitive-success-500": "var(--primitive-success-500)",
        "primitive-warning-100": "var(--primitive-warning-100)",
        "primitive-warning-300": "var(--primitive-warning-300)",
        "primitive-warning-400": "var(--primitive-warning-400)",
        "primitive-warning-500": "var(--primitive-warning-500)",
        "semantic-background-bg-information": "var(--semantic-background-bg-information)",
        "semantic-background-bg-information-inverse": "var(--semantic-background-bg-information-inverse)",
        "semantic-background-bg-primary-hover": "var(--semantic-background-bg-primary-hover)",
        "semantic-background-bg-secondary-hover": "var(--semantic-background-bg-secondary-hover)",
        "semantic-background-bg-success": "var(--semantic-background-bg-success)",
        "semantic-background-bg-warning": "var(--semantic-background-bg-warning)",
        "semantic-background-bg-warning-inverse": "var(--semantic-background-bg-warning-inverse)",
        "semantic-button-button-base-inverse": "var(--semantic-button-button-base-inverse)",
        "semantic-button-button-destructive": "var(--semantic-button-button-destructive)",
        "semantic-button-button-destructive-disabled": "var(--semantic-button-button-destructive-disabled)",
        "semantic-button-button-destructive-hover": "var(--semantic-button-button-destructive-hover)",
        "semantic-button-button-destructive-secondary-hover":
          "var(--semantic-button-button-destructive-secondary-hover)",
        "semantic-button-button-disabled": "var(--semantic-button-button-disabled)",
        "semantic-button-button-primary-base": "var(--semantic-button-button-primary-base)",
        "semantic-button-button-primary-hover": "var(--semantic-button-button-primary-hover)",
        "semantic-button-button-secondary-base": "var(--semantic-button-button-secondary-base)",
        "semantic-icons-icon-destructive": "var(--semantic-icons-icon-destructive)",
        "semantic-icons-icon-disabled": "var(--semantic-icons-icon-disabled)",
        "semantic-icons-icon-information": "var(--semantic-icons-icon-information)",
        "semantic-icons-icon-information-hover": "var(--semantic-icons-icon-information-hover)",
        "semantic-icons-icon-secondary": "var(--semantic-icons-icon-secondary)",
        "semantic-icons-icon-success": "var(--semantic-icons-icon-success)",
        "semantic-icons-icon-success-hover": "var(--semantic-icons-icon-success-hover)",
        "semantic-icons-icon-warning": "var(--semantic-icons-icon-warning)",
        "semantic-icons-icon-warning-hover": "var(--semantic-icons-icon-warning-hover)",
        "semantic-stroke-stroke-destructive": "var(--semantic-stroke-stroke-destructive)",
        "semantic-stroke-stroke-information": "var(--semantic-stroke-stroke-information)",
        "semantic-stroke-stroke-secondary-hover": "var(--semantic-stroke-stroke-secondary-hover)",
        "semantic-stroke-stroke-success": "var(--semantic-stroke-stroke-success)",
        "semantic-stroke-stroke-warning": "var(--semantic-stroke-stroke-warning)",
        "semantic-text-text-destructive-disabled": "var(--semantic-text-text-destructive-disabled)",
        "semantic-text-text-information-hover": "var(--semantic-text-text-information-hover)",
        "semantic-text-text-success": "var(--semantic-text-text-success)",
        "semantic-text-text-success-hover": "var(--semantic-text-text-success-hover)",
        "semantic-text-text-warning-hover": "var(--semantic-text-text-warning-hover)",
      },
      spacing: {
        ...combinedTokens.spacing,
      },
      padding: {
        ...combinedTokens.padding,
      },
      borderRadius: {
        ...combinedTokens.borderRadius,
      },
      textColor: {
        ...combinedTokens.textColor, // Use actual color values
      },
      backgroundColor: {
        ...combinedTokens.backgroundColor, // Use actual color values
      },
      borderColor: {
        ...combinedTokens.borderColor, // Use actual color values
      },
      boxShadow:{
        ...combinedTokens.boxShadow,
        "focus-base": "var(--focus-base)",
        "focus-destructive": "var(--focus-destructive)",
        "focus-success": "var(--focus-success)",
        "focus-warning": "var(--focus-warning)",
        "shadow-button-shadow": "var(--shadow-button-shadow)",
        "shadow-l": "var(--shadow-l)",
        "shadow-m": "var(--shadow-m)",
        "shadow-s": "var(--shadow-s)",
        "shadow-tab-shadow": "var(--shadow-tab-shadow)",
        "shadow-xl": "var(--shadow-xl)",
        "shadow-xs": "var(--shadow-xs)",
        "shadow-xxl": "var(--shadow-xxl)",
      },
      outline:{
        ...combinedTokens.outline,
      },
      fontSize: {
    'desktop-headings-display-large-regular': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-large-medium': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-large-semi-bold': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-large-bold': [
      '3.25rem',
      {
        letterSpacing: '-0.13rem',
        lineHeight: '3.5rem'
      }
    ],
    'desktop-headings-display-small-regular': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '2.88rem'
      }
    ],
    'desktop-headings-display-small-medium': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '2.88rem'
      }
    ],
    'desktop-headings-display-small-semi-bold': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '2.88rem'
      }
    ],
    'desktop-headings-display-small-bold': [
      '2.75rem',
      {
        letterSpacing: '-0.11rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-regular': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-semi-bold': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-medium': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h1-bold': [
      '2.5rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '3rem'
      }
    ],
    'desktop-headings-h2-regular': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h2-medium': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h2-semi-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h2-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.09rem',
        lineHeight: '2.75rem'
      }
    ],
    'desktop-headings-h3-medium': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h3-semi-bold': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h3-bold': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h3-regular': [
      '2rem',
      {
        letterSpacing: '-0.1rem',
        lineHeight: '2.5rem'
      }
    ],
    'desktop-headings-h4-regular': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h4-medium': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h4-semi-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h4-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'desktop-headings-h5-regular': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h5-medium': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h5-semi-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h5-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'desktop-headings-h6-regular': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'desktop-headings-h6-medium': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'desktop-headings-h6-semi-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'desktop-headings-h6-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h1-regular': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h1-medium': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h1-semi-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h1-bold': [
      '2.25rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.62rem'
      }
    ],
    'mobile-headings-h2-regular': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h2-medium': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h2-semi-bold': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h2-bold': [
      '2rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '2.5rem'
      }
    ],
    'mobile-headings-h3-regular': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h3-medium': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h3-semi-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h3-bold': [
      '1.75rem',
      {
        letterSpacing: '-0.07rem',
        lineHeight: '2.25rem'
      }
    ],
    'mobile-headings-h4-regular': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h4-medium': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h4-semi-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h4-bold': [
      '1.5rem',
      {
        letterSpacing: '-0.06rem',
        lineHeight: '2rem'
      }
    ],
    'mobile-headings-h5-regular': [
      '1.25rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h5-medium': [
      '1.25rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h5-semi-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h5-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'mobile-headings-h6-regular': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'mobile-headings-h6-medium': [
      '1.12rem',
      {
        letterSpacing: '-0.02rem',
        lineHeight: '1.5rem'
      }
    ],
    'mobile-headings-h6-semi-bold': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'mobile-headings-h6-bold': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-large-regular': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-medium': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-semi-bold': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-underlined': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.75rem'
      }
    ],
    'paragraph-large-strikethrough': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-large-italic': [
      '1.25rem',
      {
        letterSpacing: '-0.05rem',
        lineHeight: '1.62rem'
      }
    ],
    'paragraph-medium-regular': [
      '1rem',
      {
        letterSpacing: '-0.02rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-medium': [
      '1.12rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-medium-semi-bold': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-underline': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-strikethrough': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-medium-italic': [
      '1rem',
      {
        letterSpacing: '-0.04rem',
        lineHeight: '1.5rem'
      }
    ],
    'paragraph-small-regular': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-semi-bold': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-medium': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-underline': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-strikethrough': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-small-italic': [
      '0.88rem',
      {
        letterSpacing: '0rem',
        lineHeight: '1.25rem'
      }
    ],
    'paragraph-xsmall-regular': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-medium': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-semi-bold': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-underline': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-strikethrough': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'paragraph-xsmall-italic': [
      '0.62rem',
      {
        letterSpacing: '-0.03rem',
        lineHeight: '1.12rem'
      }
    ],
    'overline-web': [
      '0.62rem',
      {
        letterSpacing: '0.06rem',
        lineHeight: '1.25rem'
      }
    ],
    'overline-mobile': [
      '0.5rem',
      {
        letterSpacing: '0.06rem',
        lineHeight: '1.25rem'
      }
    ]
  }
    },
  },
  plugins: [require('@tailwindcss/forms')],
});
