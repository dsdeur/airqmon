import * as React from 'react';
import { ShallowWrapper, ShallowRendererProps, MountRendererProps, ReactWrapper } from 'enzyme';
import { IThemeInterface } from '../../src/theme';

export function shallowWithTheme<P>(
  tree: React.ReactElement<P>,
  theme: IThemeInterface,
  options?: ShallowRendererProps,
): ShallowWrapper<P, any>;

export function mountWithTheme<P>(
  tree: React.ReactElement<P>,
  theme: IThemeInterface,
  options?: MountRendererProps,
): ReactWrapper<P, any>;
