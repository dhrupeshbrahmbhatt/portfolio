import { css } from 'styled-components';

import Calibre300 from '../fonts/Calibre/Calibre-Light.woff2';
import Calibre400 from '../fonts/Calibre/Calibre-Regular.woff2';
import Calibre500 from '../fonts/Calibre/Calibre-Medium.woff2';
import Calibre600 from '../fonts/Calibre/Calibre-Semibold.woff2';
import CalibItal from '../fonts/Calibre/Calibre-RegularItalic.woff2';
import CalibSebItal from '../fonts/Calibre/Calibre-SemiboldItalic.woff2';

import SFMono300 from '../fonts/SFMono/SFMono-Light.woff2';
import SFMono400 from '../fonts/SFMono/SFMono-Regular.woff2';
import SFMono500 from '../fonts/SFMono/SFMono-Medium.woff2';
import SFMono600 from '../fonts/SFMono/SFMono-Semibold.woff2';

const calibreNormal = css`
  @font-face {
    font-family: 'Calibre';
    src: url(${Calibre400}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${Calibre300}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${Calibre500}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${Calibre600}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;

const calibreItalic = css`
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibItal}) format('woff2');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibSebItal}) format('woff2');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }
`;

const sfMonoNormal = css`
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMono400}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMono300}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMono500}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMono600}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;

const fonts = css`
  ${calibreNormal}
  ${calibreItalic}
  ${sfMonoNormal}
`;

export default fonts;
