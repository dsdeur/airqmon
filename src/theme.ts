export interface IThemeInterface {
  spacing: string;
  background: {
    primaryColor: string;
    darkColor: string;
  };
  border: {
    color: string;
    radius: string;
    size: string;
  };
  text: {
    primarySize: string;
    smallSize: string;
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
  spacing: '8px',
  background: {
    primaryColor: '#ffffff',
    darkColor: '#ececec',
  },
  border: {
    color: '#c2c0c2',
    radius: '6px',
    size: '1px',
  },
  text: {
    primarySize: '10pt',
    smallSize: '8pt',
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
