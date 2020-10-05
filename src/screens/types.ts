import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState
} from 'react-navigation';

interface NavigationScreenType
  extends NavigationScreenProp<NavigationState, NavigationParams> {
  [x: string]: any;
  toggleDrawer: () => void;
}

// App Navigation prop types
export interface NavigationInterface {
  navigation: NavigationScreenType;
}
