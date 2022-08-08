import colors from './constants/colors';
import typography from './constants/typography';
import { breakpoints, mediaQueries } from './constants/responsiveness';

const edenTheme = {
  colors,
  breakpoints,
  mediaQueries,
  ...typography,
};

export { edenTheme };
export type Theme = typeof edenTheme;
