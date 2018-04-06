export interface IThemeInterface {
  spacing: number;
  background: {
    primaryColor: string;
    darkColor: string;
  };
  border: {
    color: string;
    radius: number;
    size: number;
  };
  text: {
    face: string;
    primarySize: number;
    smallSize: number;
    primaryColor: string;
    errorColor: string;
    airQualityIndexColor: {
      $1: string;
      $2: string;
      $3: string;
      $4: string;
      $5: string;
    };
  };
}

export const LightTheme: IThemeInterface = {
  spacing: 8,
  background: {
    primaryColor: '#ffffff',
    darkColor: '#ececec',
  },
  border: {
    color: '#c2c0c2',
    radius: 6,
    size: 1,
  },
  text: {
    face:
      "system-ui, -apple-system, BlinkMacSystemFont, '.SFNSDisplay-Regular', 'Helvetica Neue', Helvetica, sans-serif'",
    primarySize: 10,
    smallSize: 8,
    primaryColor: '#333',
    errorColor: '#cc0000',
    airQualityIndexColor: {
      $1: '#79bc6a',
      $2: '#bbcf4c',
      $3: '#eec20b',
      $4: '#f29305',
      $5: '#e8416f',
    },
  },
};
