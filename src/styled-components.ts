import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { IThemeInterface } from './theme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

interface IStyleAwareProps {
  className?: string;
  theme?: IThemeInterface;
}

interface IDOMRefProvider {
  readonly ref: HTMLElement;
}

export { css, injectGlobal, keyframes, ThemeProvider, IStyleAwareProps, IDOMRefProvider };
export default styled;
