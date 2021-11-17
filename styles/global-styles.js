import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  /** Fonts **/
  @font-face {
    font-family: ${theme.fonts.proximaRegular};
    src: url('/fonts/proxima-nova-regular.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: ${theme.fonts.proximaBold};
    src: url('/fonts/proxima-nova-bold.ttf');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: ${theme.fonts.proximaItalic};
    font-style: italic;
    font-weight: 500;
    src: url('/fonts/proxima-nova-italic.ttf');
    font-display: swap;
  }

  body {
    font-family: ${theme.fonts.proximaRegular};
    ${theme.fonts.base}
  }

  a {
    color: ${theme.colors.blue};
  }

  a:hover {
    color: inherit;
  }

  strong {
    font-family: ${theme.fonts.proximaBold};
  }

  em {
    font-family: ${theme.fonts.proximaItalic};
  }

  /** Dropdown Menu **/
  .dropdown-menu {
    padding: 10px !important;
    margin: 0;
    font-size: ${theme.fonts.nav};
    letter-spacing: 1px;
    color: ${theme.colors.black};
    background-color: ${theme.colors.offWhite};
    border: none;
    border-radius: 3px;
    box-shadow: ${theme.colors.boxShadowNormal};
    transition: all 200ms linear;
  }

  /** Global Search Styling **/
  .ais-Hits-item {
    list-style-type: none;
  }

  .ais-Hits-list {
    margin-left: -30px;
  }

  .search-container {
    max-height: 800px;
    margin-top: 13px;
    background-color: ${theme.colors.offWhite};
    overflow: hidden;
    z-index: 99;
  }

  .search-container .ais-Hits-list {
    max-height: 600px;
    overflow-y: scroll;
  }

  .ais-Pagination-item {
    display: inline-block;
  }

  .ais-Hits {
    margin-top: -1em;
  }

  
  @media (max-width: 768px) {
    .search-container {
      max-width: 95%;
    }
  }

  @media (min-width: 768px) {
    .search-container {
      min-width: 640px;
    }
  }

  .ais-Pagination-list {
    list-style-type: none;
    margin-left: -2em;
    margin-top: 11px;
    display: flex;
    justify-content: space-between;
  }

  .ais-Pagination-item {
    margin-right: 10px;
    font-size: 16px;
  }

  .ais-Pagination-link {
    color: #000;
  }

  .ais-SearchBox-form {
    display: inline-flex;
    flex-direction: row-reverse;
    border-radius: 5px;
  }

  .ais-SearchBox-input {
    border: 0;
  }

  .ais-SearchBox-submit {
    border: 0px;
    background-color: #fff;
    border-right: 1px solid #a9a9a9;
  }

  .ais-SearchBox-reset {
    display: none;
  }

  .scroll-search {
    height: 28px;
    padding-left: 8px;
    left: -1em;
  }

  .top--1 {
    top: -1px;
  }

  /** Hide captcha in print **/
  @media print {
    .grecaptcha-badge {
      display: none !important;
    }
  } 

  /** Hide element in print view **/
  @media print
{    
    .no-print, .no-print *
    {
        display: none !important;
    }
}
`

export default GlobalStyles
