import 'styled-components';

// All app colors
enum COLORS {
  BD_DARK_COLOR = '#000',
  BG_LIGHT_COLOR = '#FFFFFF',
  BG_LIGHT_GREY_COLOR = '#68696F',
  BG_PRIMARY_COLOR = '#C70039',
  BG_LIGHT_BLUE_COLOR = '#D3E7FF',
  BG_SHADOW_COLOR = '#00000029',
  INACTIVE_FIELD_COLOR_LOW_OPACITY = 'rgba(112, 112, 112, 0.3)'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 10,
  MEDIUM_SIZE = 12,
  LARGE_SIZE = 15,
  HELVETICA_NEUE_REGULAR = 'HelveticaNeue',
  HELVETICA_NEUE_BOLD = 'HelveticaNeue-Bold',
  GILROY_EXTRA_BOLD = 'Gilroy-ExtraBold',
  FONT_WEIGHT_LIGHT = 200,
  FONT_WEIGHT_MEDIUM = 600,
  FONT_WEIGHT_HEAVY = 800
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      BD_DARK_COLOR: string;
      BG_LIGHT_COLOR: string;
      BG_LIGHT_GREY_COLOR: string;
      BG_PRIMARY_COLOR: string;
      BG_LIGHT_BLUE_COLOR: string;
      BG_SHADOW_COLOR: string;
      INACTIVE_FIELD_COLOR_LOW_OPACITY: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      HELVETICA_NEUE_REGULAR: string;
      HELVETICA_NEUE_BOLD: string;
      GILROY_EXTRA_BOLD: string;
      FONT_WEIGHT_LIGHT: number;
      FONT_WEIGHT_MEDIUM: number;
      FONT_WEIGHT_HEAVY: number;
    };
  }
}

// App theme
export const theme = { colors: COLORS, fonts: FONTS };
